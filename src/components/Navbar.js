import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store'
// import { useEffect, useState } from "react";

export default function Navbar() {

    const data = useStore((state) => state.data)
    const setData = useStore((state) => state.setData)

    const [navbarOpen, setNavbarOpen] = useState(false);
    const logout = () => {
        setData([])
        localStorage.clear();
    }

    return (
        <>
            <header className="bg-white z-50 top-0 md:sticky">
                <div className="container flex justify-between mx-auto">
                    <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2 md:p-1 font-medium md:font-bold text-3xl text-lavender">
                        ShopCart
                    </Link>
                    <div className="flex flex-grow items-center justify-end"></div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            {(data.firstName != null) && <Link rel="noopener noreferrer" to="/dashboard" className="flex items-center px-4 -mb-1 font-bold text-violet hover:text-lavender font-Kanit">{data.firstName}</Link>}
                            {(data.firstName != null) && <Link rel="noopener noreferrer" to="/" onClick={logout} className="flex items-center px-4 -mb-1 text-violet hover:text-lavender font-Kanit">Logout</Link>}
                            {(data.firstName == null) && <Link rel="noopener noreferrer" to="/login" className="flex items-center px-4 -mb-1 font-bold text-violet hover:text-lavender font-Kanit">Sign In</Link>}
                        </li>
                        <li className="flex">
                            <p rel="noopener noreferrer" className="flex items-center px-4 -mb-1 text-violet hover:text-lavender tracking-wide  font-Kanit">Orders</p>
                        </li>
                        <li className="flex">
                            <Link to="/cart" rel="noopener noreferrer" href="#roadmap" className="flex items-center px-4 -mb-1 text-violet hover:text-lavender  font-Kanit">Your Cart</Link>
                        </li>

                    </ul>


                    <button className="flex justify-end p-4 lg:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#843b62" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>


                <div className="lg:hidden">
                    <ul className={(navbarOpen ? "grid grid-cols-1" : "hidden")}>
                        {(data.firstName == null) && <Link to="/login" className="block p-4 text-sm transition  duration-300 hover:bg-slate-200 text-violet">Sign In</Link>}
                        {(data.firstName != null) && <Link to="/dashboard" className="block text-sm p-4  transition  duration-300 bg-slate-100  hover:bg-slate-200 text-violet" >{data.firstName}</Link>}
                        {(data.firstName != null) && <Link to="/" onClick={logout} className="block text-sm p-4  transition  duration-300  hover:bg-slate-200 text-violet" >Logout</Link>}

                        <li><p className="block  text-sm p-4  transition  duration-300 bg-slate-100  hover:bg-slate-200 text-violet" >Orders</p></li>
                        <li><Link to="/cart" className="block  text-sm p-4  transition  duration-300   hover:bg-slate-200 text-violet" href="#challenges">Your Cart</Link></li>

                    </ul>
                </div>
            </header>
        </>
    );
}
