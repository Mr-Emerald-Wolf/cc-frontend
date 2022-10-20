import React from "react";
import { Link } from 'react-router-dom';
import {useStore} from '../store'
// import { useEffect, useState } from "react";

export default function Navbar({ fixed }) {
   
    const data = useStore((state) => state.data)
   
    
    
    // console.log(name);
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <header className="bg-white z-50 top-0 md:sticky">
                <div className="container flex justify-between mx-auto">
                    <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-1 md:font-bold text-3xl text-lavender">
                        ShopCart
                    </Link>
                    <div className="flex flex-grow items-center justify-end"></div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            {<Link rel="noopener noreferrer" to="/dashboard" className="flex items-center px-4 -mb-1 font-bold text-violet hover:text-lavender font-Kanit">{data.firstName}</Link>}
                           { <Link rel="noopener noreferrer" to="/login" className="flex items-center px-4 -mb-1 font-bold text-violet hover:text-lavender font-Kanit">Sign In</Link>}
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#tech" className="flex items-center px-4 -mb-1 text-violet hover:text-lavender tracking-wide font-light  font-Kanit">Orders</a>
                        </li>
                        <li className="flex">
                            <Link to="/cart" rel="noopener noreferrer" href="#roadmap" className="flex items-center px-4 -mb-1 text-violet hover:text-lavender  font-Kanit">Your Cart</Link>
                        </li>
                       
                    </ul>


                    <button className="flex justify-end p-4 lg:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ef4444" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>


                <div className="lg:hidden">
                    <ul className={(navbarOpen ? "grid grid-cols-1" : "hidden")}>
                        <li ><a className="block p-4  transition  duration-300 bg-slate-700 hover:bg-slate-800 text-violet" href="#app">App</a></li>
                        <li ><a className="block text-sm p-4  transition  duration-300 bg-slate-600 hover:bg-slate-800 text-violet" href="#tech">Tech Used</a></li>
                        <li ><a className="block text-sm  p-4  transition  duration-300 bg-slate-700 hover:bg-slate-800 text-violet" href="#roadmap">Road Map</a></li>
                        <li><a className="block  text-sm p-4  transition  duration-300 bg-slate-600  hover:bg-slate-800 text-violet" href="#challenges">Challenges Faced</a></li>
                        <li><a className="block  text-sm p-4  transition  duration-300 bg-slate-700  hover:bg-slate-800 text-violet" href="#about">About Us</a></li>

                    </ul>
                </div>
            </header>
        </>
    );
}
