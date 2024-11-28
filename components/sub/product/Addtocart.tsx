"use client"
const Addtocart = () => {
  const handleClick=()=>{
    alert("Hellow world")
  }
  return (
    <>
      <button onClick={handleClick} className="border border-gray-300  rounded-full hover:bg-gray-600  hover:text-white text-gray-800 px-4 py-1 ">Add to cart</button>
    </>
  )
}

export default Addtocart
