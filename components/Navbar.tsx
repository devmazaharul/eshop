import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import Searchbar from "./sub/Searchbar";
import Mobilesearch from "./sub/Mobilesearch";


export default function Navbar() {
  return (
    <div className="flex px-2  md:px-0 py-4  items-center justify-between">
      <div className="text-xl font-semibold">
      <Link href={'/'}>Eshop</Link>
      </div>

      {/*this is searcbar */}
      <div className="bg-gray-100 w-fit  rounded-md md:w-[40%]">
          {/* pc serach option */}
  <div className="hidden md:block">
  <Searchbar/>
  </div>
  {/* mobile serach option */}
  <div className=" md:hidden">
   <Mobilesearch/>
  </div>
      </div>

      <div className="flex text-2xl items-center gap-3 md:gap-8">
        <Link className="hidden md:flex items-center" href={'/favorite'}>
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
