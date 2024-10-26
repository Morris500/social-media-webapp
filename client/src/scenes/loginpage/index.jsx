import React from 'react';
import Navbar from '../navbar';
import Form from './Form'
import { Box, Typography, useMediaQuery, useTheme} from '@mui/material';


const Loginpage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
  <Box>
  <Navbar/>
    <box width='100%' backgroundColor={theme.palette.background.alt} p='1rem 6%' textAlign='center'>
      <Typography fontWeight='bold' fontSize='32px' color='primary'>
       welcome to Sociopedia
      </Typography>
      <Form />
    </box>
    <Box width={isNonMobileScreens ? '50%' : '93%'} p='2rem' m='2rem  auto' borderRadius='1.5rem' backgroundColor={theme.palette.background.alt}>

    </Box>
    </Box>)
}

export default Loginpage