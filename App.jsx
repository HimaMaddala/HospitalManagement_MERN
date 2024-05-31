import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Doctors from './Doctors';
import LoginDoctor from './Logindoctors';
import Doctordashboard from './Doctorsdashboard';
import Homecomp from './Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>}/>
        <Route path="/appointment"element={<><Doctors /></>}/>
        <Route path="/doctors_login"element={<><LoginDoctor/></>}/>
        <Route path="/doctor_dashboard/:doctorId" element={<Doctordashboard />} />
        <Route path="/home" element={<Homecomp/>} />
        </Routes>
        </BrowserRouter>
  );
}
        

export default App;

