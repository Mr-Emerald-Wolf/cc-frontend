import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
