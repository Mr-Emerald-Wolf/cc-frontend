import React from 'react'
// import { useStore } from '../store'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



export default function ProductItem(props) {
    // const addProduct = useStore((state) => state.addProduct)
    // const products = useStore((state) => state.products)
    const deleteItem = () => toast(props.title + " deleted from Inventory");
    const err = (error) => toast(error);



    // addProduct(products)

    const Reload = async (e) => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_API}/product/getProduct`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.data);
                props.reload(response.data.data);

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const Remove = async (e) => {
        const token = localStorage.getItem('token');

        var config = {
            method: 'delete',
            url: `${process.env.REACT_APP_API}/product/deleteProduct/?productName=${props.title}`,
            headers: {
                'authorization': `Bearer ${token}`,
            },
        };

        axios(config)
            .then(function (response) {

                console.log(JSON.stringify(response.data));
                Reload();
                deleteItem();
            })
            .catch(function (error) {
                err(error.message);
                err("Failed To Remove. You are not an Admin.");
                console.log(error);
            });

    }
    const Update = async (e) => {

    }
    return (
        <>
            <Toaster />
            <div className="max-w-sm rounded-lg shadow-lg bg-white">

                <img src={props.imageURL} className="rounded-t-lg h-80" alt="" />

                <div className="p-5">
                    <a href="/#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-800 ">{props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-violet">Price: Rs {props.price}</p>
                    <p className="mb-3 font-normal text-violet">{props.description}</p>
                    <button onClick={Remove} className="m-1 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-pink-800 rounded-lg hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Remove
                    </button>
                    <button onClick={Update} className="m-1 inline-flex items-center p-2 text-sm font-medium text-center text-white bg-pink-800 rounded-lg hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Update Item
                    </button>
                </div>
            </div>
        </>
    )
}
