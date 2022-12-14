import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductItem from './ProductItem';

export default function Products() {
    const [data, setData] = useState(null);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState();



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
    const Filter = (price) => {
        let A = products;
        A = A.filter(e => e.productPrice < price)
        // console.log(A);
        setData(A);
    }

    const Above3000 = () => {
        let A = products;
        A = A.filter(e => e.productPrice > 3000)
        // console.log(A);
        setData(A);
    }
    const search = (e) => {
        e.preventDefault();
        const items = products.filter(item => {
            return item.productName.toLowerCase().includes(query.toLowerCase())
        })

        setData(items);

    }
    const Reset = () => {
        setData(products);
    }


    return (
        <>
            <section className='flex flex-col items-center px-6 lg:px-32 py-5 bg-slate-100 justify-center '>
                <div className="pt-2 relative mx-auto text-gray-600">
                    <div >
                        <input id="search" value={query} onChange={(e) => setQuery(e.target.value)} className="border-2 border-gray-300 bg-white h-10 px-5 pr-16  rounded-lg text-md focus:outline-none"
                            type="search" name="url" placeholder="Search" />
                        <button type="submit" onClick={search} className="absolute right-0 top-0 mt-5 mr-4" >
                            <svg className="text-gray-600 h-4 w-4 fill-current"
                                version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966"
                                width="512px" height="512px">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-slate-100 min-h-screen">
                <div className="p-[2rem]">
                    <h1 className="New Products text-4xl text-lavender text-center font-bold">All Products</h1>
                </div>
                <div className="hidden md:grid grid-cols-5">
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => Filter(1000)}>
                        {"<"} 1000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => Filter(2000)}>
                        Under 2000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => Filter(3000)}>
                        Under 3000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Above3000}>
                        3000 {'<'}
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center rounded-lg border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Reset}>
                        Reset Filters
                    </button>
                </div>
                <div class="grid md:hidden grid-cols-4 gap-0 p-2">
                    <button type="button" class="group relative flex mx-auto justify-center  border border-transparent bg-pink-800 py-1 px-6 rounded-l font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => Filter(1000)}>
                        Under 1000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center  border border-transparent bg-pink-800 py-1 px-6  font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => Filter(2000)}>
                        Under 2000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center  border border-transparent bg-pink-800 py-1 px-6  font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => Filter(3000)}>
                        Under 3000
                    </button>
                    <button type="button" class="group relative flex mx-auto justify-center  border border-transparent bg-pink-800 py-1 px-6 rounded-r font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Above3000}>
                        Above 3000
                    </button>
                   
                </div>
                <div className="grid-cols-1 grid md:hidden">
                
                    <button type="button" class="group relative flex mx-auto rounded justify-center border border-transparent bg-pink-800 py-2 px-6 text-md font-medium text-white hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Reset}>
                        Reset Filters
                    </button>
                </div>
                <div className="p-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">

                    {!loading && data.map((element) => {
                        return (<ProductItem key={element.productName} id={element.id} description={element.productDesc} title={element.productName} price={element.productPrice} imageURL={element.imgUrl} />)
                    })}

                </div>
            </section>
        </>
    )
}
