import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import {Box, IconButton, Typography, useTheme} from  "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state";
import FlexBetween from "" ;
import UserImage from "./UserImage";

const Friend = ({friendId, name, subtitle, userPicturePath}) => {
    const dispatch = useDispatch();
    const navigate = usenavigate();
    const {_id} = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends)

}