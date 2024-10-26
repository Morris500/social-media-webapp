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
  const isAUth = Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='/Home' element={isAUth ? <Homepage/> : <Navigate to='/' />} />
        <Route path='/Profile/:userId' element={isAUth ?<Profilepage/> :<Navigate to='/' />} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
