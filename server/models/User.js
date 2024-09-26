import mongoose from "mongoose";
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  LastName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  } ,
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  picturePath: {
    type: String,
    default: ""
 },
 friends: {
    type: Array,
    default: []
 },
  location: String,
  occupation: String,
  viewedProfile: Number,
  impression: Number
  },
{timestamps: true}
);

const User = mongoose.model("User", UserSchema)

export default User;