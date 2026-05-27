import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getThumbnailById, getUserThumbnail } from "../controllers/UserController.js";

const userRouter = Router();

userRouter.get('/thumbnails', authMiddleware , getUserThumbnail);
userRouter.get('/thumbnail/:id' , authMiddleware , getThumbnailById);

export default userRouter;