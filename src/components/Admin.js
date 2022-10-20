import React from 'react'
import { useStore } from '../store'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react'

export default function Admin() {
  const data = useStore((state) => state.data)
  // console.log(data);

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');

  const Add = async (e) => {
       
    e.preventDefault();
    try {
      var data = JSON.stringify({
        "productName": name,
        "productDesc": desc,
        "imgUrl": "https://images.pexels.com/photos/164710/pexels-photo-164710.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2",
        "productPrice": price
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:3001/product/createProduct',
        headers: { 
          'Content-Type': 'application/json', 
          'Cookie': 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJBcnRodXIiLCJyb2xlIjpudWxsLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NjYyNzAzMDZ9.ri3pNgLnkGZZ9Pvdv4ZJCnWmCVO3-uMxY2kqDFVN3VE; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJBcnRodXIiLCJyb2xlIjpudWxsLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NjYyNzAzMDYsImV4cCI6MTY2NjM1NjcwNn0.hnvanRQsasalCDrO5alpRc34TsXTnYE9z3kQIWzfRaQ'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.msg);
        }
    }
}

  return (
    <>
      <div className="min-h-screen p-2 bg-slate-100">
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Admin</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Admin Control Panel</p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.firstName + " " + data.lastName}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.email}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Role</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.role}</dd>
              </div>
            </dl>
          </div>
        </div>
        <section className='bg-slate-100 p-3'>
                  {/* <!-- component --> */}
                  <div class="bg-grey-lighter flex flex-col">
                      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                          <div class="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
                              <h1 class="mb-8 text-3xl text-center text-pink-800">Add Product</h1>
                              <input
                                  type="text"
                                  class="block border border-grey-light w-full p-3 rounded mb-4"
                                  name="fullname"
                                  value={name} onChange={(e) => setName(e.target.value)}
                                  placeholder="Product Name" />
                              <input
                                  type="text"
                                  class="block border border-grey-light w-full p-3 rounded mb-4"
                                  name="description"
                                  value={desc} onChange={(e) => setDesc(e.target.value)}
                                  placeholder="Product Description" />
                              <input
                                  type="text"
                                  class="block border border-grey-light w-full p-3 rounded mb-4"
                                  name="price"
                                  value={price} onChange={(e) => setPrice(e.target.value)}
                                  placeholder="Price" />
                              <input
                                  type="text"
                                  class="block border border-grey-light w-full p-3 rounded mb-4"
                                  name="imgURL"
                                  value={img} onChange={(e) => setImg(e.target.value)}
                                  placeholder="Image Url" />
        
                              <button type="button" class="group relative flex w-full justify-center rounded border border-transparent bg-pink-800 py-3 px-5 text-sm font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Add}>
                                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                      {/* <!-- Heroicon name: mini/lock-closed --> */}
                                      <svg class="h-5 w-5 group-hover:text-pink-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                      </svg>
                                  </span>
                                 Add New Product
                              </button>
                          </div>
        
                      </div>
                  </div>
              </section>
      </div>

    </>
  )
}
