import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { deleteThumbnail, generateThumbnail } from "../controllers/ThumbnailController.js";

const thumbnailRouter = Router();

thumbnailRouter.post('/generate' , authMiddleware , generateThumbnail)
thumbnailRouter.delete('/delete/:id' , authMiddleware , deleteThumbnail)

export default thumbnailRouter;