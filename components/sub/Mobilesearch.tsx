"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

const Mobilesearch = () => {

    const [search, setsearch] = useState("")
    const router=useRouter()
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        router.push(`/search?q=${search}`)
    }




  return (
    <form onSubmit={handleSubmit} className='flex  items-center rounded-md py-1 border px-2'>
      <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" className=" bg-transparent w-fit  outline-none  " placeholder='Search'/>
   <p> <IoSearch className='w-fit mx-auto '/></p>
    </form>
  )
}

export default Mobilesearch
