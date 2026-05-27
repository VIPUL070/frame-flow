import type { Request, Response } from "express";
import { Thumbnail } from "../models/Thumbnail.js";
import { HarmBlockThreshold, HarmCategory, type GenerateContentConfig } from "@google/genai";
import { colorSchemeDescriptions, stylePrompts } from "../utils/utils.js";
import ai from "../config/ai.js";
import path from "path";
import fs from "fs/promises";
import { v2 as cloudinary } from "cloudinary";

export const generateThumbnail = async (req: Request, res: Response) => {
    let filePath: string | null = null;

    try {
        const { userId } = req

        if (!userId) {
            return res.status(411).json({
                message: "User not authenticated"
            })
        }

        const { title, prompt: user_prompt, style, aspect_ratio, color_scheme, text_overlay } = req.body

        const thumbnail = await Thumbnail.create({
            userId,
            title,
            prompt_used: user_prompt,
            user_prompt,
            style,
            aspect_ratio,
            color_scheme,
            text_overlay,
            isGenerating: true
        })

        //DEFINE MODEL AND CONFIG
        const model = 'gemini-3.5-flash';
        const generationConfig: GenerateContentConfig = {
            maxOutputTokens: 32768,
            temperature: 1,
            topP: 0.95,
            responseModalities: ['IMAGE'],
            imageConfig: {
                aspectRatio: aspect_ratio || '16:9',
                imageSize: '1K',
            },
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.OFF,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.OFF,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.OFF,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.OFF,
                }
            ]
        }

        //PROMPT CREATION
        const chosenStyle = stylePrompts[style as keyof typeof stylePrompts] || 'professional thumbnail';
        let prompt = `Create a ${chosenStyle} for: ${title}. `;
        if (color_scheme) {
            prompt += `Use a ${colorSchemeDescriptions[color_scheme as keyof typeof colorSchemeDescriptions]}
            color scheme.`
        }
        if (user_prompt) {
            prompt += `Additional details: ${user_prompt}.`
        }
        prompt += `The thumbnail should be ${aspect_ratio} , visually stunning and designed to maximize click-through rate. Make it bold, professional and impossible to ignore.`

        //GENERATE THE IMAGE USING AI MODEL
        const response: any = await ai.models.generateContent({
            model,
            contents: [prompt],
            config: generationConfig
        })

        if (!response?.candidates?.[0]?.content?.parts) {
            throw new Error('Unexpected response')
        }

        const parts = response?.candidates?.[0]?.content?.parts;
        if (!parts) {
            throw new Error('Unexpected response format from Gemini API');
        }

        let finalBuffer: Buffer | null = null;
        for (const part of parts) {
            if (part.inlineData?.data) {
                finalBuffer = Buffer.from(part.inlineData.data, 'base64');
                break;
            }
        }

        // CRITICAL: Stop the execution if buffer extraction failed
        if (!finalBuffer) {
            throw new Error('No image data found in Gemini response');
        }

        const filename = `final-output-${Date.now()}.png`;
        filePath = path.join('images', filename);

        // CREATE LOCAL IMAGE DIRECTORY
        await fs.mkdir('images', { recursive: true });
        await fs.writeFile(filePath, finalBuffer);

        // It is highly recommended to use secure_url
        const uploadResult = await cloudinary.uploader.upload(filePath, { resource_type: 'image' });

        thumbnail.image_url = uploadResult.url;
        thumbnail.isGenerating = false;
        await thumbnail.save();

        res.status(200).json({
            message: "Thumbnail Generated",
            thumbnail
        })
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message
        })
    } finally {
        if (filePath) {
            try {
                await fs.unlink(filePath);
            } catch (cleanupError) {
                console.error("Failed to delete temp file:", cleanupError);
            }
        }
    }
}

export const deleteThumbnail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { userId } = req

        if (!id) {
            return res.status(403).json({
                message: "Required id is not valid."
            })
        }

        if (!userId) {
            return res.status(411).json({
                message: "Unable to delete. User not authenticated"
            })
        }

        await Thumbnail.findByIdAndDelete({
            _id: id,
            userId
        })

        res.status(200).json({
            message: "Thumbnail deleted successfully."
        })

    } catch (error) {
        res.status(500).json({
            message: (error as Error).message
        })
    }
}