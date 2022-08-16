import mongoose from "mongoose";
import dotenv from 'dotenv';
import("../modules/comment/model.js")
import("../modules/post/model.js")
import("../modules/user/model.js")

dotenv.config();

const connectionString = process.env.CONNECTION_STRING;
const db = mongoose.connection;

export const connectDB = () => {
    mongoose.connect(connectionString, { useNewUrlParser: true })
}

db.once('open', _ => {
    console.log('Database connected')
})

db.on('error', err => {
    console.error('connection error:', err)
})