import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import Searchbar from "./sub/Searchbar";


export default function Navbar() {
  return (
    <div className="flex px-6 md:px-0 py-4 md:border-t items-center justify-between">
      <div className="text-xl font-semibold">
      <Link href={'/'}>Eshop</Link>
      </div>
      <div className="bg-gray-100 hidden md:block rounded-md w-[40%]">
       <Searchbar/>
      </div>
      <div className="flex text-2xl items-center gap-8">
        <Link className="flex  items-center" href={'/favorite'}>
        <MdFavoriteBorder/>
        </Link>
        <Link className="flex  items-center" href={'/users'}>
        <FaRegUser/>
        </Link>
        <Link className="flex  items-center" href={'/cart'}>
        <FiShoppingCart/>
        <sup className="bg-red-400 text-white p-2 rounded-full">1</sup>
        </Link>
      </div>
    </div>
  )
}
