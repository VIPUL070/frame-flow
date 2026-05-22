import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose"

export const connectDB = async () => {
    const URL = process.env.DB_URL

    if (!URL) {
        console.error("DB_URL is missing from your .env file!");
        process.exit(1); 
    }

    try {
        mongoose.connection.on('connected', () => {
            console.log("DB connected.......")
        })
        await mongoose.connect(`${URL}/frame_flow`)
    } catch (error) {
       console.error("Error connecting to the DB", error)
       process.exit(1);
    }
}