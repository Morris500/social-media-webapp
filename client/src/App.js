import {BrowserRoute, Navigate, Routes, Route} from 'react-router-dom';
import Homepage from './scenes/homepage';
import Loginpage from './scenes/loginpage';
import Profilepage from './scenes/profilepage';


function App() {
  return (
    <div className="App">
      <BrowserRoute>
      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='/Homepage' element={<Homepage/>} />
        <Route path='/Profile/:userId' element={<Profilepage/>} />
      </Routes>
      </BrowserRoute>
    </div>
  );
}

export default App;
