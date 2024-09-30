import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv  from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import jwt from "jsonwebtoken"
import { fileURLToPath } from "url";
import {register}  from "./server/controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoute from './routes/users.js';

// configuration middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express(); 
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb", extended : true}));
app.use(bodyParser.urlencoded({limit:"30", extended:true}));
app.use(cors());
app.use("/assert", express.static(path.join(__dirname, "public/asserts")));

//SEVER SETUP
const port = process.env.PORT;

// FILE STORAGE........
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/asserts")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage });

//MONGOOSE SETUP
try {
const DB = await mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
console.log('DB connected');
   
} catch (error) {
 console.log(`ERROR connecting to DB ${error}`);
    
}

app.get("auth/register", upload.single('picture'), register );

//ROUTES
app.use("/auth", authRoutes);
app.use('/users')




app.listen(port, ()=> {console.log(`sever connected at port ${port}`);
})