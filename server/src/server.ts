import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
await connectDB();

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173' , 'http://localhost:8080'],
    credentials: true
}))

app.listen(port , () => {
    console.log(`App listening on port ${port}`)
})