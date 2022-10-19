import React from 'react'
import { useState } from 'react'
import axios from 'axios';
// import { useHistory } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [msg, setMsg] = useState('');
    // const history = useHistory();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/users/login', {
                email: email,
                password: password
            });
            
            // history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg);
            }
        }
    }
 
    return (
        
        <>
          <div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-coral">
                <div class="w-full max-w-md space-y-8">
                    <div>
                        
                            <h2 class="mt-6 text-center text-4xl font-bold tracking-tight text-pink-800">Sign in to your account</h2>
                        
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true"/>
                            <div class="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label for="email-address" class="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
                                </div>
                                <div>
                                    <label for="password" class="sr-only">Password</label>
                                    <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                                </div>

                                <div class="text-sm">
                                    <a href="/" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                                </div>
                            </div>

                            <div className='grid gap-2'>
                                <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-800 py-2 px-4 text-sm font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Auth}>
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        {/* <!-- Heroicon name: mini/lock-closed --> */}
                                        <svg class="h-5 w-5 group-hover:text-pink-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Sign in
                                </button>
                                <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-800 py-2 px-4 text-sm font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        {/* <!-- Heroicon name: mini/lock-closed --> */}
                                       
                                    </span>
                                    Register
                                </button>
                            </div>
                    </form>
                </div>
            </div>
  
        </>
    )
}