import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema(
{
    userId: {
        typeof: String,
        required: true
    },
    firstName:{
        typeof: String,
        required: true
    },
    lastName:{
        typeof: String,
        required: true
    },
    location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes:{
            type: Map,
            of: Boolean
        },
       comments:{
        typeof: Array,
        default: []
       },
},
  {timestamps: true}
);
 const Post = mongoose.model("post", postSchema);

 export default Post;