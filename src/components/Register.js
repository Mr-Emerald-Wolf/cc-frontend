import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';



export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    let navigate = useNavigate();


    const Auth = async (e) => {

        try {
            var data = JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "role": role
            });

            var config = {
                method: 'post',
                url: 'http://localhost:3001/users/createUser',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };


            axios(config)
                .then(function (response) {
                    console.log(response.data.accessToken);
                    localStorage.setItem('token', response.data.accessToken);
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });

            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                console.log(error);
                console.log(error.response.data.msg);
            }
        }
    }

    return (
        <>
            <section className='bg-slate-100 min-h-screen'>
                {/* <!-- component --> */}
                <div class="bg-grey-lighter min-h-screen flex flex-col">
                    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div class="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
                            <h1 class="mb-8 text-3xl text-center text-pink-800">Sign up</h1>
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name" />
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                value={lastName} onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name" />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" />
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="role"
                                value={role} onChange={(e) => setRole(e.target.value)}
                                placeholder="Role" />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />

                            <button type="button" class="group relative flex w-full justify-center rounded border border-transparent bg-pink-800 py-3 px-5 text-sm font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Auth}>
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    {/* <!-- Heroicon name: mini/lock-closed --> */}
                                    <svg class="h-5 w-5 group-hover:text-pink-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Create Account
                            </button>

                            <div class="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the Terms of Service and Privacy Policy

                            </div>
                        </div>

                        <div class="text-grey-dark mt-6">

                            <Link to="/login" class="no-underline border-b border-blue text-blue" >
                                Already have an account? Log in
                            </Link>.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
