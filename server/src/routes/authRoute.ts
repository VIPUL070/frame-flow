import { Router } from "express";
import { loginUser, registerUser, verifyUser } from "../controllers/AuthController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = Router();

//auth routes
authRouter.post('/register' , registerUser);
authRouter.post('/login' , loginUser);
authRouter.get('/verify' , authMiddleware, verifyUser);

export default authRouter;