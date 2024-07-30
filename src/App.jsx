import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/login'; // Ensure this path is correct
import Register from './components/auth/register'; // Ensure this path is correct
import Header from './components/header'; // Ensure this path is correct
import Home from './components/home'; // Ensure this path is correct
import Contribute from './components/nav/Contribute'; // Ensure this path is correct
import { AuthProvider } from './contexts/authContext';
import NotFound from './components/nav/NotFound';

function App() {
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">
        <Routes>
          <Route path="/home"element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contribute" element={<Contribute title="Contribute" />} />
<Route path="/contactus" element={<Contribute title="Contact Us" />} />

            <Route path="*" element={<NotFound/>} /> 
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
