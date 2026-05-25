import type { Request, Response } from "express";
import { Thumbnail } from "../models/Thumbnail.js";

export const generateThumbnail = async (req: Request, res: Response) => {
    try {
        const { userId } = req

        if (!userId) {
            return res.status(411).json({
                message: "User not authenticated"
            })
        }

        const {title, prompt: user_prompt, style ,aspect_ratio,color_scheme, text_overlay} = req.body

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

        res.status(200).json({

        })

    } catch (error) {
        res.status(500).json({
            message: (error as Error).message
        })
    }
}