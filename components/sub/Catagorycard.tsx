import Image from 'next/image'
import React from 'react'

export default function Catagorycard({avatar,name}:{avatar:string,name:string}) {
  return (
    <>
    <div>
            <div className='hover:scale-95 ease-out cursor-pointer duration-300 p-4 '>
                <Image src={avatar} className='rounded-md'  width={300} height={300} alt='catagory image'/>
                <p className='text-lg text-center font-medium text-gray-600 py-2'>{name}</p>
            </div>
    </div>


      
    </>
  )
}
