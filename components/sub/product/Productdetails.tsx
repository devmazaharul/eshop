'use client'
import { productDetailsprop } from '@/types/Sitetypes'
import Image from 'next/image'
import React, { useState } from 'react'
import Addtocart from './Addtocart'
import Buynowbtn from './Buynowbtn'
import { FaStar } from "react-icons/fa";

const imageArr=[

  {
    id:1,
    url:"https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id:2,
    url:"https://images.pexels.com/photos/7622520/pexels-photo-7622520.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id:3,
    url:"https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]


const Productdetails = ({id,name,desc,price,rating,brand,size,discount,color}:productDetailsprop) => {

const [imageIndex, setimageIndex] = useState(0)


  return (
    <div className=' py-6'>
      <div className='md:grid mt-7 grid-cols-4  gap-8  p-4 '>
        <div className='col-span-2'>
          <Image className='h-[400px] hover:object-fill hover:w-full hover:h-full ease-in duration-300 w-[400px] rounded-lg object-cover shadow-lg' src={imageArr[imageIndex].url} width={1000} height={950} alt='product images'/>
            <div className='flex items-center gap-2 my-6'>
    {imageArr.map((img,i)=>{
      if(i==imageIndex){
        return (
        <div key={img.id} className='py-5'>
            <Image    className='w-[200px] rounded-md shadow-xl h-[200px] object-fill' onClick={()=>setimageIndex(i)} width={200} height={140} alt='slide img' src={img.url}/>
              <h1 className='text-md py-2 text-center text-pink-500'>Current</h1>
        </div>
        )
      }else{
        return   <Image  key={img.id}  className='w-[200px] rounded-md shadow-md h-[200px] object-fill' onClick={()=>setimageIndex(i)} width={200} height={140} alt='slide img' src={img.url}/>
      }
    })}
            </div>
        </div>
        <div className='col-span-2'>
          <h1 className='text-xl font-semibold py-2'> {name}</h1>
        
          <h1 className='leading-8'>{id}-{desc}</h1>
         
         <div className='flex items-center gap-2 border-b w-full py-4 '>
          <div className='flex text-2xl text-yellow-400  items-center '>
            <FaStar />
            <FaStar />
            <FaStar />
          
           
          </div>
          <p >{rating} Start Rating</p></div>
          <div className='flex py-4 items-center gap-3'>
          <p className='text-xl font-semibold '>৳ {parseInt(`${price-((price/100)*discount)}`)}</p>
          <p className='text-xl font-semibold line-through text-gray-500'>৳ {price}</p>
          </div>

          <div className='flex items-center justify-between w-fit text-md'>
            <p>Instalment</p>
            <p>  Up to 6 months, as low as ৳ 1,890 per month.</p>
          </div>

          <div className='flex items-center py-3  gap-3 justify-between w-fit text-md'>
            <p className='text-xl font-semibold '>Colors: </p>
          
            {color.map(clr=><p key={Math.random()} className={`text-${clr||'red'}-500 capitalize  rounded-full `}>{clr}</p>)}
      
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
