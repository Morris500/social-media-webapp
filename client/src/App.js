import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Homepage from './scenes/homepage';
import Loginpage from './scenes/loginpage';
import Profilepage from './scenes/profilepage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {ThemeProvider, CssBaseline } from '@mui/material';
import {createTheme} from '@mui/material/styles';
import { themeSettings } from './theme';



function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='/Homepage' element={<Homepage/>} />
        <Route path='/Profile/:userId' element={<Profilepage/>} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
