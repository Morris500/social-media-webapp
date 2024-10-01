import User from "../models/User";

// read
const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const getUserFriends = async (req, res) => {
    try {
        const {id} = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
        user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
        ({_id, firstname, lastname, occupation, location, picturePath}) => {
            return {_id, firstname, lastname, occupation, location, picturePath }
        }
    )
res.status(200).json({formattedFriends});  

    } catch (error) {
       res.status(404).json({message: error}) 
    }
}

// update
const addRemoveFreind = async (req, res) => {
    try {
        const {id, friendId} = req.params;
        const user= await User.findById(idd);
        const friend =await User.findById(friendId);

         if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
         }
    } catch (error) {
        
    }
}