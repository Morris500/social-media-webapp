import Post from "../models/posts.js";
import User from '../models/User.js'

//create 
export const Createpost = async (req, res) => {
    try {
        const {userId, description, picturePath }= req.body;
        const user = await User.findById(userId);
        const newpost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes:{},
            comments:[]
        })

        newpost.save();
        const post = await Post.find();

        res.status(201).json(post);
    } catch (error) {
      res.status(409).json({message: error.message}) ;
    }
}

//Read
export const getFeedPosts = async (req, res) =>{
    try {
        const post = await Post.find();
        res.status(200).json(post);  
    } catch (error) {
        res.status(404).json({message: error.message})   
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({userId});
        res.status(200).json(post);  
    } catch (error) {
        res.status(404).json({message: error.message})   
    }
}

// update 
export const likePost =async (req, res) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const post =await post.findById(id);
        const isliked = post.likes.get(userId);

        if (isliked){
            post.likes.delete(userId);
        }else {
            post.likes.set(userId, true);

            const updatedPost = await Post.findByIdAndUpdate(
                id,
                {likes:post.likes},
                {new: true}
                
            )
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}