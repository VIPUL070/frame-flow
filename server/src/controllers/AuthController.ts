import type { Request, Response } from "express";
import z from "zod";
import jwt from 'jsonwebtoken'
import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string

// USER REGISTER
const userSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(1)
})
export const registeruser = async (req: Request, res: Response) => {
    try {
        const parsedBody = userSchema.safeParse(req.body)

        if (!parsedBody.success) {
            return res.status(411).json({
                message: "Error in inputs"
            })
        }
        const { name, email, password } = parsedBody.data

        const userExist = await User.findOne({
            $or: [{ email }, { name }]
        })

        if (userExist) {
            const field = userExist.email === email ? "email" : "username";
            return res.status(409).json({
                message: `User already exists with this ${field}`
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully.",
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: (error as Error).message
        })
    }
}


// USER LOGIN
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1)
})
export const loginUser = async (req: Request, res: Response) => {
    const response = loginSchema.safeParse(req.body);

    if (!response.success) {
        return res.status(411).json({
            message: "Error in inputs"
        })
    }

    const { email, password } = response.data;

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password!)
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '14d' })

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error ' + (error as Error).message
        })
    }
}