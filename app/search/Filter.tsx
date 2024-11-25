import React from 'react'

export default function Filter() {
  return (
 <>
 <div>
  {/* mobile filter option */}
  <div className='bg-gray-800   md:hidden  p-2 rounded-md text-gray-300'>
   <h1 className='text-center text-xl font-semibold border-b w-fit mx-auto my-4 border-gray-400 '>FILTER</h1>
      <div className='items-center flex justify-between'>
      <div className='border-r border-gray-500 px-2'>
        
          <select >
            <option value="">Higt to low</option>
            <option value="">Low to high</option>
          </select>
        </div>
        <div className='border-r border-gray-500 px-2'>
       
          <select >
            <option value="">Cloth</option>
            <option value="">Low to high</option>
          </select>
        </div>
        <div className=' px-2'>
      
          <select >
            <option value="">Apex</option>
            <option value="">Low to high</option>
          </select>
        </div>
      </div>
    </div>

  {/* desctop filter option */}

  <div className='hidden md:block'>
    <p className='text-xl font-semibold border-b w-fit  py-2'>Filter Product</p>
    <ul className='leading-9'>
      <li>By product</li>
      <li>By price</li>
      <li>By brand</li>
      <li>By model</li>
    </ul>
  </div>
 </div>
 </>
  )
}
