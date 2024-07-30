import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import OtpLogin from './components/OTPLogin';
import OtpVerification from './components/OTPVerification';

const App = () => {
    return (
        <div>
        <BrowserRouter>
             <Routes>
            <Route path="/" element=<Register/>/>
          <Route path="/login" element=<Login/> />
          <Route path="/otp-login" element=<OtpLogin/>/>
           <Route path="/verify-otp" element=<OtpVerification/>/>
           </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
