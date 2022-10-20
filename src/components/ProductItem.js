import React from 'react'
import { useStore } from '../store'
import toast, { Toaster } from 'react-hot-toast';

export default function ProductItem(props) {
    const addProduct = useStore((state) => state.addProduct)
    const products = useStore((state) => state.products)
    const notify = () => toast(props.title+" added to Cart");

    // addProduct(products)
    const Add = async (e) => {
        e.preventDefault();
        products.push({
            "productName": props.title,
            "productDesc": props.description,
            "imgUrl": props.imageURL,
            "productPrice": props.price
        })
        notify();
        addProduct(products);
        console.log(products);

    }
    return (
        <>
        <Toaster />
            <div className="max-w-sm rounded-lg shadow-lg">

                <img src={props.imageURL} className="rounded-t-lg" alt="" />
                <div className="p-5">
                    <a href="/#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-800 ">{props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-violet">Price: Rs {props.price}</p>
                    <p className="mb-3 font-normal text-violet">{props.description}</p>
                    <button onClick={Add} className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-pink-800 rounded-lg hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Add To Cart
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}
