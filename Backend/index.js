import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import guesthouseRoute from './routes/guesthouse.js';
import roomsRoute from './routes/rooms.js';

const app = express();
dotenv.config();

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('Successfully connected to MongoDB!')
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middleware
app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/guesthouse", guesthouseRoute)
app.use("/api/rooms", roomsRoute)

app.listen(8800, () => {
    connect();
    console.log('Backend server is running!');
});
