import { EditOutlined, DeleteOutline, AttachFileOutlined, ImageOutlined, MicOutlined, MoreHorizOutlined } from "@mui/icons-material";
import {Box, Divider, Typography, InputBase,useTheme, Button, IconButton, useMediaQuery} from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/widgetwrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setPosts } from "../../state";
import React from 'react'

 const MypostWidgets = () => {
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const {palette} = useTheme();
    const {_id} = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;

    const handelPost = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);
        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);
        }

        const response = await fetch (`http://localhost:3002/post`, {
            method: "POST",
            headers: {Authorization: `Bearer ${token}`},
            body: formData,
        });
        const posts = await response.json();
        dispatch(setPosts({ posts }));
        setImage(null);
        setPost("");
    }
  return (
    <WidgetWrapper>
        <FlexBetween gap="1.5rem">
            <UserImage image={picturePath} />
            <InputBase placeholder="what's on your mind..." onChange={(event) => setPost(event.target.value)} value={post} sx={{width:"100%",
             backgroundColor:palette.neutral.light,
             borderRadius: "2rem", padding: "1rem 2rem"}} 
             />
        </FlexBetween>
    </WidgetWrapper>
  )
}
export default MypostWidgets; 