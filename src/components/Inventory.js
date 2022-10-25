import React, { useState, useEffect } from 'react'
import axios from 'axios';
import InventoryItem from './InventoryItem';
import toast, { Toaster } from 'react-hot-toast';



export default function Inventory() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const addItem = () => toast(name + " added to Inventory");
    const err = (error) => toast(error);



    useEffect(() => {
        Reload();
    }, [])

    const Reload = async (e) => {
        const token = localStorage.getItem('token');
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_API}/product/getProduct`,
            headers: { 
                'authorization': `Bearer ${token}`, 
              }
        };

        axios(config)
            .then(function (response) {
                setData(response.data.data);
                console.log(response.data.data);
                setLoading(false);

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');

    const Add = async (e) => {

        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            var data = JSON.stringify({
                "productName": name,
                "productDesc": desc,
                "imgUrl": img,
                "productPrice": price
            });

            var config = {
                method: 'post',
                url: `${process.env.REACT_APP_API}/product/createProduct`,
                headers: { 
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`, 
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    Reload();
                    addItem();
                })
                .catch(function (error) {
                    err(error.message);
                    err("Failed To Add. You are not an Admin.");
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
            <Toaster />
            <section className="bg-slate-100 p-3">
                <div className="p-[2rem]">
                    <h1 className="New Products text-4xl text-lavender text-center font-bold">All Products in Inventory</h1>
                </div>
                <div className="p-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">

                    {!loading && data.map((element) => {
                        return (<InventoryItem key={element.productName} description={element.productDesc} title={element.productName} price={element.productPrice} imageURL={element.imgUrl} reload={setData} />)
                    })}

                </div>
            </section>
            <section className='bg-slate-100 p-4'>
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
        </>
    )
}
