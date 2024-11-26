import { productDetailsprop } from '@/types/Sitetypes'
import Image from 'next/image'
import React from 'react'
import Addtocart from './Addtocart'
import Buynowbtn from './Buynowbtn'
import { FaStar } from "react-icons/fa";


const Productdetails = ({id,name,desc,price,rating,brand,size,discount,color}:productDetailsprop) => {

  return (
    <div className='shadow-xl border py-6'>
      <div className='md:grid mt-7 grid-cols-4  gap-8  p-4 '>
        <div className='col-span-1'>
          <Image className='hover:w-full' src="/lab.jpg" width={500} height={400} alt='product images'/>
        </div>
        <div className='col-span-3'>
          <h1 className='text-xl font-semibold py-2'> {name}</h1>
        
          <h1 className='leading-8'>{desc}</h1>
         
         <div className='flex items-center gap-2 border-b w-full py-4 '>
          <div className='flex text-2xl text-yellow-400  items-center '>
            <FaStar />
            <FaStar />
            <FaStar />
          
           
          </div>
          <p >{rating} Start Rating</p></div>
          <div className='flex py-4 items-center gap-3'>
          <p className='text-xl font-semibold '>৳ {price-((price/100)*discount)}</p>
          <p className='text-xl font-semibold line-through text-gray-500'>৳ {price}</p>
          </div>

          <div className='flex items-center justify-between w-fit text-md'>
            <p>Instalment</p>
            <p>  Up to 6 months, as low as ৳ 1,890 per month.</p>
          </div>

          <div className='flex items-center py-3  gap-3 justify-between w-fit text-md'>
            <p className='text-xl font-semibold '>Colors: </p>
          
            {color.map(clr=><p key={id} className={`text-${clr||'red'}-500 capitalize  rounded-full `}>{clr}</p>)}
      
          </div>
          <div className='flex items-center py-3  gap-3 justify-between w-fit text-md'>
            <p className='text-xl font-semibold '>Size : </p>
          
         <p className='uppercase'>{size.join(" , ")}</p>
      
          </div>
          <div className='flex items-center py-3  gap-3 justify-between w-fit text-md'>
            <p className='text-xl font-semibold '>Brand : </p>
          
         <p>{brand}</p>
      
          </div >
          <div className='flex items-center gap-4 my-6 '>
            <Addtocart/>
            <Buynowbtn/>
       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetails
