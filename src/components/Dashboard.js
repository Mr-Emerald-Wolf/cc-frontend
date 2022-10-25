import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useStore } from '../store'
import { useNavigate } from 'react-router-dom';


// import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const setData = useStore((state) => state.setData)
    const data = useStore((state) => state.data)
    let navigate = useNavigate();


    // let navigate = useNavigate();


    useEffect(() => {
        getUsers();
    },[]);

    
    
    const getUsers = async () => {
        const token = localStorage.getItem('token');
        var config = {
            method: 'get',
            url: 'http://localhost:3001/users/finduser',
            headers: { 
                'authorization': `Bearer ${token}`, 
              }
        };

        axios(config)
            .then(function (response) {
                setData(response.data.data);
                setLoading(false);
                setUser(response.data.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>

            {<div class="bg-slate-100 p-2 min-h-screen">
                <section className="p-2 bg-white shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal User Details</p>
                    </div>
                    <div class="border-t border-gray-200">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{!loading && user.firstName + " " + user.lastName}</dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Role</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.role}</dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.email}</dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Address</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                            </div>
                        </dl>
                    </div>
                </section>
                {(data.role === "admin") && <button type="submit" onClick={() => { navigate('/admin') }} class="m-3 group relative flex mx-auto justify-center rounded-md border border-transparent bg-pink-800 py-2 px-4 text-sm font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* <!-- Heroicon name: mini/lock-closed --> */}

                </span>
                Admin Dashboard
            </button>}
            </div>
            } 
        </>
    )
}

export default Dashboard