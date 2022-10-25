import React from 'react'
import { useStore } from '../store'
import toast, { Toaster } from 'react-hot-toast';


export default function CartItem(props) {
  let products = useStore((state) => state.products)
  const addProduct = useStore((state) => state.addProduct)
  const deleteItem = () => toast(props.title + " removed from Cart");

  const remove = async (e) => {

    e.preventDefault();
    deleteItem();
    products = products.filter(products => products.productName !== props.title);
    addProduct(products);
    console.log(products);
  }

  return (
    <>
      <Toaster/>
      <div class="grid items-center grid-flow-row md:grid-flow-col hover:bg-gray-100 -mx-8 px-6 py-5">

        <div class="">
          <img class="h-24" src={props.imageURL} alt="" />
        </div>

        <div className='grid grid-flow-row'>

          <span class="font-bold text-sm">{props.title}</span>
          <span class="text-sm overflow-hidden">{props.description}</span>
          <span class="font-semibold text-sm">Rs. {props.price}</span>

        </div>


        <div className='flex mx-auto'><button onClick={remove} class="font-semibold bg-slate-100 p-2 md:p-0 md:bg-inherit hover:text-red-500 text-gray-500 text-xs">Remove</button></div>
      </div>

    </>
  )
}
