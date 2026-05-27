import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import authRouter from './routes/authRoute.js'
import { connectDB } from "./config/db.js";
import thumbnailRouter from "./routes/thumbnailRoute.js";
import userRouter from "./routes/userRoute.js";

await connectDB();

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

app.use('/api/auth', authRouter);
app.use('/api/thumbnail' , thumbnailRouter);
app.use('/api/user' , userRouter);

app.listen(port , () => {
    console.log(`App listening on port ${port}`)
})