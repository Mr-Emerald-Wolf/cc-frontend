import {React} from 'react';
import './App.css';
import Landing from './components/Landing';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Info from './components/Info';


function App() {
  return (
    <>
     
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/login" element={<Login  />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Info />} />
        </Routes>
      
    </>
  );
}

export default App;
