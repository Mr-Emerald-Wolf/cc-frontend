import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem';
import axios from "axios";

export default function Products() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        var config = {
          method: 'get',
          url: 'http://localhost:3001/product/getProduct',
          headers: { }
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
        
    }, [])
    


    return (
        <>
            <section className="bg-slate-100 min-h-screen">
                <div className="p-[2rem]">
                    <h1 className="New Products text-4xl text-lavender text-center font-bold">All Products</h1>
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
