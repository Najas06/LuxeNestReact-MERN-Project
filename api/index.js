// create and run server by express ,  nodemon , node.js 
import express from 'express';
// connecting mongoose 
import mongoose from 'mongoose';
import dotenv from 'dotenv'
// creating a router for userRouter 
import userRouter from './routes/user.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MONGODB");
    })
    .catch((error) => {
        console.error(error);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!!!');
})

app.use("/api/user", userRouter)