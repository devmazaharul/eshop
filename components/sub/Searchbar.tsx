"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

export default function Searchbar() {

const [search, setsearch] = useState("")
    const router=useRouter()
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        router.push(`/search?q=${search}`)
    }


  return (
    <>
       <form onSubmit={handleSubmit} className="flex cursor-pointer  justify-between items-center gap-2">
            <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" className="py-2 px-2 w-full bg-transparent outline-none" placeholder="Search for products"/>
           <button className='bg-gray-700 text-gray-300  h-[40px] w-[100px]'> <IoSearch className='w-fit mx-auto'/></button>
        </form>
    </>
  )
}
