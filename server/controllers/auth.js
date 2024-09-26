import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

//REGISTER USER
 const register = async (req, res) => {
    try {
        const{
            firstname,
            lastname,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

const salt = await bcrypt.genSalt(10);
const passwwordHash = await bcrypt.hash(password, salt);

const newUser = new User ({firstname, lastname, email, password: passwwordHash, picturePath, friends, location, occupation, viewedProfile:"", impressions:"" });

const savedUser = await newUser.save();
res.status(201).json(savedUser);
       
    } catch (error) {
        res.status(505).json({error: error})
    }
}

export {register} ;