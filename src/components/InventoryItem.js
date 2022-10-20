import React from 'react'
// import { useStore } from '../store'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



export default function ProductItem(props) {
    // const addProduct = useStore((state) => state.addProduct)
    // const products = useStore((state) => state.products)
    const deleteItem = () => toast(props.title+" deleted from Inventory");


    // addProduct(products)

    const Reload = async (e) => {
        var config = {
            method: 'get',
            url: 'http://localhost:3001/product/getProduct',
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


        var config = {
            method: 'delete',
            url: `http://localhost:3001/product/deleteProduct/?productName=${props.title}`,
            headers: {
                'Cookie': 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJBcnRodXIiLCJyb2xlIjpudWxsLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NjYyNzAzMDZ9.ri3pNgLnkGZZ9Pvdv4ZJCnWmCVO3-uMxY2kqDFVN3VE; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJBcnRodXIiLCJyb2xlIjpudWxsLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NjYyNzAzMDYsImV4cCI6MTY2NjM1NjcwNn0.hnvanRQsasalCDrO5alpRc34TsXTnYE9z3kQIWzfRaQ'
            }
        };

        axios(config)
            .then(function (response) {

                console.log(JSON.stringify(response.data));
                Reload();
                deleteItem();
            })
            .catch(function (error) {
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
