import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import type { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

dotenv.config();

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined in .env");

    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: "Invalid Auth Header"
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token as string, JWT_SECRET as string)as jwt.JwtPayload

        req.userId = decoded.userId;
            if (!req.userId) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }
            next();

    } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: "Token expired" });
    }
    if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: "Invalid token structure" });
    }
    res.status(500).json({ message: "Internal server error" });
}
}