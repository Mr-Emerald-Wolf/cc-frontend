import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductItem from './ProductItem';

export default function Products() {
    const [data, setData] = useState(null);
    const [products, setProducts] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:3001/product/getProduct',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data.data);
                setProducts(response.data.data);
                console.log(response.data.data);
                setLoading(false);

            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    const Under1000 = (price) => {
        setData(products);
        let A = data.filter(e => e.productPrice < 1000)
        console.log(A);
        setData(A);
    }
    const Under2000 = () => {
        setData(products);
        let A = data.filter(e => e.productPrice < 2000)
        console.log(A);
        setData(A);
    }
    const Under3000 = () => {
        setData(products);
        let A = data.filter(e => e.productPrice < 3000)
        console.log(A);
        setData(A);
    }
    const Above3000 = () => {
        setData(products);
        let A = data.filter(e => e.productPrice > 3000)
        console.log(A);
        setData(A);
    }
    const Reset = () => {
        setData(products);
    }


    return (
        <>
            <section className="bg-slate-100 min-h-screen">
                <div className="p-[2rem]">
                    <h1 className="New Products text-4xl text-lavender text-center font-bold">All Products</h1>
                </div>
                <div className="grid grid-cols-5">
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Under1000}>
                        {"<"} 1000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Under2000}>
                        1000 - 2000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Under3000}>
                        2000 - 3000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Above3000}>
                        3000 {'<'}
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Reset}>
                        Reset Filters
                    </button>
                </div>
                <div className="p-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">

                    {!loading && data.map((element) => {
                        return (<ProductItem key={element.productName} description={element.productDesc} title={element.productName} price={element.productPrice} imageURL={element.imgUrl} />)
                    })}

                </div>
            </section>
        </>
    )
}
