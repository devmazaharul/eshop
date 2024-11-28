'use client'
import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const Chartbutton = () => {

    const [show, setshow] = useState(false)

    const handleClick=()=>{
       setshow(!show)
    }


  return (
    <><div>
        
        <button onClick={handleClick} className="flex  items-center">
        <FiShoppingCart/>
        <sup className="bg-red-400  text-white p-2 rounded-full">1</sup>
        </button>
{show?    <div className={`${show?'z-10':''}z-0`}>
        <h1>hellow</h1>
        <h1>hellow</h1>
        <h1>hellow</h1>
        <h1>hellow</h1>
    </div>
:""}

    </div>
    </>
  )
}

export default Chartbutton
