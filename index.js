import dotenv from "dotenv"; dotenv.config();
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import albumsRouter from "./routes/albumsRoute.js"
import musiciansRouter from "./routes/musiciansRoute.js"

const {MONGODB_URI, PORT} = process.env;

//Server setup
const app = express();
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/musicians', musiciansRouter);
app.use('/albums', albumsRouter);


//Database & server run
mongoose.connect(MONGODB_URI)
    .then(()=> {
        console.log('Mongo connected successfully.')
        app.listen(`${PORT}`, ()=> {
            console.log(`Server is listening on port ${PORT}`);
        })
    }).catch(error => console.error(error));
