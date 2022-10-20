import React from 'react'
import { useStore } from '../store'


export default function CartItem(props) {
    let products = useStore((state) => state.products)
    const addProduct = useStore((state) => state.addProduct)

    const remove = async (e) => {
       
        e.preventDefault();
        products = products.filter(products => products.productName !== props.title);
        addProduct(products);
        console.log(products);
    }
    
  return (
    <>
     <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5">
             {/* <!-- product --> */}
            <div class="w-3/4">
              <img class="h-24 " src={props.imageURL} alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow p-2">
              <span class="font-bold text-sm">{props.title}</span>
              <span class=" text-sm">{props.description}</span>
            </div>
              <button onClick={remove} class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
          </div>
          
         <span class="text-center w-1/5 font-semibold text-sm">Rs. {props.price}</span>
        </div>

    </>
  )
}
