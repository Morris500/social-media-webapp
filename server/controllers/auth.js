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

//LOGGING IN 
    const login = async (req, res, ) => {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email: email});
            console.log(user);
            
            if (!user){
                res.status(404).json({msg: "User does not exit"})
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).json({msg: "Invalid Credential" });
            }
            const token = jwt.sign({id: user._id}, process.env.SECRET)
            delete user.password;
            res.sattus(200).json({token, user});
        } catch (error) {
         res.status(500).json({error: error.message});   
        }
    }

export {register, login} ;