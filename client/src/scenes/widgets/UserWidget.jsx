import { ManageAccountsOutlined, EditOutlined, LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/flexBetween";
import WidgetWrapper from "../../components/widgetwrapper";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import state from "../../state";

const UserWidget = ({userId, picturePath}) => {
    const {user, setUser} = useState({});
    const {palette} = useTheme();
    const navigate = useNavigate();
    //const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        // const response = await fetch(`http://localhost:3002/users/${userId}`, 
        //     {
        //         method: "GET",
        //         hearders: {Authorization: `Bearer${token}`},
        //      });
             //const data = await response.json();
             const data1 = {
                firstName: "testggghh",
                lastName: "me",
                email: "aaaaaaa@gmail.com",
                friends: [1, 2, 3],
                location: "San Fran, CA",
                occupation: "Software Engineer",
                viewedProfile: 14561,
                impressions: 888822,}
             setUser({data1});
    };
    //useEffect(() => {
      //  getUser();
    //}, []) //eslint-disable-line react-hooks/exhaustive-deps

// if (!user) {
//     return null;
// }

console.log(user);

//  const { location, occupation, viewedProfile, impression, friends,} = user;
// const firstName = user.firstName;
 return (
    <WidgetWrapper>
        {/* first row */}
        <FlexBetween gap='0.5rem' pd='1.1rem' onClick={() => navigate(`/profile/${userId}`)}>
            <FlexBetween gap='1rem'>
                <UserImage image={picturePath} />
            <Box>
                <Typography variant='h4' color={dark} fontweight='500' sx={{'&:hover':{color: palette.primary.light,
                    cursor: 'pionter'}}} >
                        {/* {firstName} {lastName} */}
                    </Typography>
                    <Typography  color={medium}>
                        {/* {friends.length} friends */}
                        </Typography>
            </Box>
            
           </FlexBetween>
           <ManageAccountsOutlined/>
           </FlexBetween>
           <Divider />

           {/* second row */}
           <Box p='1rem o'>
            <Box display='flex' alignItems='center' gap='1rem' mb='0.5rem'>
                <LocationOnOutlined fontSize="large" sx={{color: main}} />
                <Typography color={medium}>
                    {/* {location} */}
                    </Typography>
            </Box>
            <Box display='flex' alignItems='center' gap='1rem'>
                <WorkOutlineOutlined fontSize="large" sx={{color:main}} />
                <Typography color={medium}>
                    {/* {occupation} */}
                    </Typography>
            </Box>
           </Box>

           <Divider />

           {/* third row */}
           <Box p='1rem 0'>
            <FlexBetween mb= '0.5rem'>
                <Typography color={medium} >who's viewed your profile</Typography>
                <Typography color={main} fontweight='500'>
                    {/* {viewedProfile} */}
                    
                </Typography>
            </FlexBetween>
            <FlexBetween>
                <Typography color={medium}>Impressions of your post</Typography>
                <Typography color={main} fontWeight='500'>
                    {/* {impression} */}

                </Typography>
            </FlexBetween>
           </Box> 

           <Divider />

           {/* fourth row */}
           <Box p='1rem 0'>
            <Typography fontSize='1rem' color={main} fontWeight='500' mb='1rem'>Social Profiles</Typography>
            <FlexBetween gap='1rem' mb='0.5rem'>
                <FlexBetween gap='1rem'>
                    <img src="../assert/twitter.png" alt="twwiter" />
                    <Box>
                        <Typography color={main} fontweight='500'>Twitter</Typography>
                        <Typography color={medium} >Social Network</Typography>
                    </Box>
                </FlexBetween>
                <EditOutlined sx={{color: main}} />
            </FlexBetween>

            <FlexBetween gap='1rem' >
                <FlexBetween gap='1rem'>
                    <img src="../assert/linkedin.png" alt="linkedin" />
                    <Box>
                        <Typography color={main} fontweight='500'>Linkedin</Typography>
                        <Typography color={medium} >Networking platform</Typography>
                    </Box>
                </FlexBetween>
                <EditOutlined sx={{color: main}} />
            </FlexBetween>
           </Box>
            
     
  </WidgetWrapper>
 )
};

export default UserWidget;