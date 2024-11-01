import React from 'react'
import Navbar from '../navbar';
import { Box, useMediaQuery } from '@mui/material';
import UserWidget from '../widgets/UserWidget';
import { useSelector } from 'react-redux';
import MypostWidgets from '../widgets/MypostWidgets';


const Homepage = () => {
   const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const {_id, picturePath } = useSelector((state) => state.user);

  return ( 
    <Box>
    <Navbar/>
    <Box width='100%' padding= '2rem 6%' 
    display={isNonMobileScreens ? "flex" : "block"} 
    gap='0.5rem' justifyContent="space-between">
      <Box 
      flexBasis={isNonMobileScreens ? "26%" : undefined}>
      <UserWidget userId="_id" picturePath="picturePath"/>
      </Box>
      <Box 
      flexBasis={isNonMobileScreens ? '42%' : undefined} 
      mt={isNonMobileScreens ? undefined : '2rem'}>
        <MypostWidgets picturePath='picturePath' />
      </Box>
      {isNonMobileScreens && <Box flexBasis='26%'></Box> }
    </Box>
   
    </Box>
  )
}

export default Homepage