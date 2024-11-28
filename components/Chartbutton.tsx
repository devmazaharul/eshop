"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Chartbutton = () => {
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setshow(!show);
  };

  return (
    <>
      <div className="relative ">
        <button onClick={handleClick} className="flex  items-center">
          <FiShoppingCart className="text-2xl"/>
          <sup className="bg-red-400  text-white p-2 rounded-full">3</sup>
        </button>
        {show ? (
          <div className={` absolute ease-in-out duration-200 bg-white text-gray-800 p-4 border h-auto rounded-md shadow-lg top-10 right-4 w-[330px]`}>
           <div>
            <h1 className="text-xl font-mono mb-3 ">Shopping Cart</h1>
          <div>

          <div className="flex  justify-between gap-2 my-2 py-1">
                <div className="flex gap-3">
                  <Image className="rounded-md shadow-md " src={'/laptop.jpg'} alt="product img" width={100} height={80} />
                  <div>
                  <h1 className="text-lg capitalize text-gray-900">dell laptop</h1>
                  <p className="text-sm text-gray-500">available</p>
                </div>
                
                </div>
              
                <div>$35</div>
            </div>
          <div className="flex  justify-between gap-2 my-2  py-1">
                <div className="flex gap-3">
                  <Image className="rounded-md shadow-md " src={'/laptop.jpg'} alt="product img" width={100} height={80} />
                  <div>
                  <h1 className="text-lg capitalize text-gray-900">Mac book air</h1>
                  <p className="text-sm text-gray-500">Avavailableable</p>
                </div>
                
                </div>
              
                <div>$35</div>
            </div>
          <div className="flex  justify-between gap-2 my-2 py-1">
                <div className="flex gap-3">
                  <Image className="rounded-md shadow-md " src={'/laptop.jpg'} alt="product img" width={100} height={80} />
                  <div>
                  <h1 className="text-lg capitalize text-gray-900">samsung s21</h1>
                  <p className="text-sm text-gray-500">available</p>
                </div>
                
                </div>
              
                <div>$35</div>
            </div>
{/*             
            subtotal amount */}
            <div className="border-t py-2">
              <div className="flex items-center justify-between">
               <div>
               <p className="text-xl font-semibold">Subtotal</p>
               <p className="text-sm text-gray-500">shiping and taxes at checkout</p>
               </div>
                <div>
                  $105
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <button className="border py-2 hover:bg-slate-100 px-3 rounded-md">View cart</button>
                <button className="border py-2 px-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md">Checkout</button>
                
              </div>
            </div>
          </div>
            
           </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Chartbutton;
