import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.DB_URL

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("DB connected.......")
        })
        await mongoose.connect(`${URL}/frame_flow`)
    } catch (error) {
       console.error("Error connecting to the DB", error)
    }
}