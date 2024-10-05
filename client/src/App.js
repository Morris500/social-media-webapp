import {BrowserRoute, Navigate, Routes, Route} from 'react-router-dom';
import Homepage from './scenes/homepage';
import Loginpage from './scenes/loginpage';
import Profilepage from './scenes/profilepage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {createTheme, CssBaseline} from '@mui/material/styles';
import { themeSettings } from './theme';
import { ThemeProvider } from '@emotion/react';


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <div className="App">
      <BrowserRoute>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='/Homepage' element={<Homepage/>} />
        <Route path='/Profile/:userId' element={<Profilepage/>} />
      </Routes>
      </ThemeProvider>
      </BrowserRoute>
    </div>
  );
}

export default App;
