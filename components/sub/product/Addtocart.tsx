"use client"
const Addtocart = () => {
  const handleClick=()=>{
    alert("Hellow world")
  }
  return (
    <>
      <button onClick={handleClick} className="bg-gray-700 hover:bg-gray-600  text-gray-200 px-4 py-1 rounded-sm">Add to cart</button>
    </>
  )
}

export default Addtocart
