import React, { Component, useEffect } from 'react';
import {Routes, Route, Redirect, useNavigate} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';
import Home from './container/Home';

const App = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
      if (!User) navigate('/login');
    }, []);
  
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='/*' element={<Home />} />
            </Routes>
        </GoogleOAuthProvider>
    );
}

export default App;