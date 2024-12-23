import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined, } from "@mui/icons-material";
import {Box, Divider, IconButton, Typography, useTheme} from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/widgetwrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state";


const PostWidget = ({postId, postUserId, name, description, location, picturePath, userPicturePath, likes, comments}) => {

    const [isComments, setIsComments] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggeInUserId =useSelector((state) => state.user._id);
    const isLiked = boolean(likes[loggeInUserId]);
    const LikeCount = Object.keys(likes).length; 

    const {palette} = useTheme();
    const main = palette.neutral.main;
    const meduim = palette.primary.main;

    const patchLike = async () => {
        const response = await fetch (`http://localhost:3002/posts/${postId}/lke`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type":"application/json",
            },
            body: JSON.stringify({userId: loggeInUserId}),
        });
        const updatedPost = await response.jsosn();
        dispatch(setPsot({post:updatedPost}));
    };
    return(
    <WidgetWrapper m="2rem 0" >
        <Friend friendId={postUserId} name={name} subtitle={location} userPicturePath={userPicturePath} />
        <Typography color={main} sx={{mt: "1rem"}}>
            {description}
        </Typography>
        {picturePath && ( 
            <img width="100%" height="auto" alt="post" style={{borderRadius: "0.75rem", marginTop: "0.75rem"}} src={`http://localhost:3002/assert/${picturePath}`} 
        />
         )}
         <FlexBetween mt="0.25rem">
            <FlexBetween gap="1rem">
                <FlexBetween gap="0.3rem">
                     <IconButton onClick={patchLike} >
                        {isLiked ? (<FavoriteOutlined sx={{color: primary}} /> ) : ( <FavoriteOutlined /> )}
                     </IconButton>
                     <Typography>{LikeCount}</Typography>
                </FlexBetween>
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={() => setIsComments(!isComments)}>
                        <ChatBubbleOutlineOutlined />
                    </IconButton>
                    <Typography>{comments.length}</Typography>
                </FlexBetween>
            </FlexBetween>
            <IconButton>
                <ShareOutlined />
            </IconButton>
         </FlexBetween>
         {isComments && (
            <Box mt="0.5rem">
                {comments.map((Comment, i) => (
                    <Box key={`${name}-${i}`}>
                        <Divider />
                        <Typography sx={{color: main, m: "0.5rem 0", pl: "1rem"}}>
                            {Comment}
                        </Typography>
                    </Box>
                ))} 
                <Divider />
            </Box>
         )}
    </WidgetWrapper> 
)
};

export default PostWidget;