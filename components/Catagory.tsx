import React from 'react'
import Catagorycard from './sub/Catagorycard'

export default function Catagory() {
  return (
    <div >
    <div className='w-1/1 md:1/2 mx-auto text-center py-4'>
    <h1 className='text-xl font-semibold py-2'>Explore Popular Categories</h1>
    <p>Lorem ipsum dolor sit amet, c.    ex velit?  eid qui animi hic sed quidem ?</p>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center gap-4'>
    
        <Catagorycard avatar='/pro3.png' name='Iphone 11'/>
        <Catagorycard avatar='/pro3.png' name='Iphone '/>
        <Catagorycard avatar='/pro3.png' name='Iphone 12'/>
        <Catagorycard avatar='/pro3.png' name='Iphone 12 pro'/>
        <Catagorycard avatar='/pro3.png' name='Samsung'/>
        <Catagorycard avatar='/pro3.png' name='Iphone 13 pro max'/>
        <Catagorycard avatar='/pro3.png' name='Iphone 8'/>
        <Catagorycard avatar='/pro3.png' name='Iphone 7'/>
        <Catagorycard avatar='/pro3.png' name='Iphone 6s'/>
        <Catagorycard avatar='/pro3.png' name='Iphone 11'/>
        <Catagorycard avatar='/pro3.png' name='Iphone 12 Mini'/>
        <Catagorycard avatar='/pro3.png' name='samsung s21'/>
       
       
    </div>
    </div>
  )
}
