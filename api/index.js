// create and run server by express ,  nodemon , node.js 
import express from 'express';

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!!!!');
})