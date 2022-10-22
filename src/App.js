import {React, useState} from 'react';
import './App.css';
import Landing from './components/Landing';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Admin from './components/Admin';
import Cart from './components/Cart';


function App() {
    const [data,setData] = useState(null);

  return (
    <>
     
        <Navbar data={data} setData={setData}/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/login" element={<Login  />} />
          <Route path="/dashboard" element={<Dashboard data={data} setData={setData}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      
    </>
  );
}

export default App;
