import type { Request, Response } from "express";
import { Thumbnail } from "../models/Thumbnail.js";

//controller to get all user Thumbnail
export const getUserThumbnail = async (req: Request, res: Response) => {
    try {
        const { userId } = req;

        if (!userId) {
            return res.status(401).json({
                message: "User not authenticated"
            })
        }

        const thumbnails = await Thumbnail.find({ userId }).sort({ createdAt: -1 })

        res.status(200).json({
            message: "User Thumbnails fetched successfully.",
            thumbnails
        })

    } catch (error) {
        res.status(500).json({
            message: (error as Error).message
        })
    }
}

// controller to get the single thumbnail of user
export const getThumbnailById = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        if (!id) {
            return res.status(400).json({
                message: "Required ID is missing or invalid."
            })
        }

        const { userId } = req;
        if (!userId) {
            return res.status(401).json({
                message: "User not authenticated"
            })
        }

        const thumbnail = await Thumbnail.findOne({
            userId,
            _id: id,
        })

        res.status(200).json({
            message: "User Thumbnail via id fetched successfully.",
            thumbnail
        })

    } catch (error) {
        res.status(500).json({
            message: (error as Error).message
        })
    }
}