import React from 'react'
import Products from './Products'

function Landing() {
   

    return (
        <>
            <section className="flex flex-col items-center px-6 lg:px-32 py-5 bg-slate-100 justify-center ">
                <main id='landing' className="w-full md:w-9/12 xl:w-8/12">

                    <h1 className="text-4xl md:text-6xl lg:text-9xl md:p-4 font-kalam font-bold text-black text-center">
                        ShopCart
                    </h1>
                    <p className="font-bold mb-1 lg:text-4xl text-center text-lavender">Search for the best products today </p>

                </main>

               
            </section>
            <Products />
        </>
    )
}

export default Landing