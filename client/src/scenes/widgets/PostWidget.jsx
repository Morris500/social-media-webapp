import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined, } from "@mui/icons-material";
import {Box, Divider, IconButton, Typography, useTheme} from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/widgetwrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state";

const PostWidget = ({postId, postUserId, name, description, location, picturePath, userPicturePath, likes, comments}) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);

    const {palette} = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const meduim = palette.neutral.medium;
}