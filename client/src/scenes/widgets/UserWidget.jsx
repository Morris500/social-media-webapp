import { ManageAccountsOutlined, EditOutlined, LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/flexBetween";
import WidgetWrapper from "../../components/widgetwrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import state from "../../state";

const UserWidget = ({userId, picturePath}) => {
    const {user, setUser} = useState(null);
    const {palette} = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3002/users/${userId}`, 
            {
                method: "GET",
                hearders: {Authorization: `Bearer${token}`},
             });
             const data = await response.json();
             setUser(data);
    };
    useEffect(() => {
        getUser();
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

if (!user) {
    return null;
}

const {firstName, lastName, location, occupation, viewedProfile, impression, friends,} = user;
 return (
    <WidgetWrapper>
        {/* first row */}
        <FlexBetween gap='0.5rem' pd='1.1rem' onClick={() => navigate(`/profile/${userId}`)}>
            <FlexBetween gap='1rem'>
                <UserImage image={picturePath} />
            <Box>
                <Typography variant='h4' color={dark} fontweight='500' sx={{'&:hover':{color: palette.primary.light,
                    cursor: 'pionter'}}} >
                        {firstName} {lastName}
                    </Typography>
                    <Typography  color={medium}>{friends.length} friends</Typography>
            </Box>
            <ManageAccountsOutlined/>
           </FlexBetween>
           <Divider />

           {/* second row */}
           <Box p='1rem o'>
            <Box display='flex' alignItems='center' gap='1rem' mb='0.5rem'>
                <LocationOnOutlined fontSize="large" sx={{color: main}} />
                <Typography color={medium}>{location}</Typography>
            </Box>
            <Box display='flex' alignItems='center' gap='1rem'>
                <WorkOutlineOutlined fontSize="large" sx={{color:main}} />
                <Typography color={medium}>{occupation}</Typography>
            </Box>
           </Box>

           {/* third row */}
           <Box p='1rem 0'>
            <FlexBetween mb= '0.5rem'>
                <Typography color={medium} >who's viewed your profile</Typography>
                <Typography color={main} fontweight='500'>{viewedProfile}</Typography>
            </FlexBetween>
            <FlexBetween>
                <Typography color={medium}>Impressions of your post</Typography>
                <Typography color={main} fontWeight='500'>{impression}</Typography>
            </FlexBetween>
           </Box> 

           {/*  */}
            
     </FlexBetween>
  </WidgetWrapper>
 )
};