import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Navbar from './components/navbar';
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;