import { Productprop } from "@/types/Sitetypes";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";
import Addtocart from "./sub/product/Addtocart";

export default function Product({
  title,
  src,
  price,
  discount,
  rating,
}: Productprop) {
  const total = (price-(price / 100) * discount);
  const exprice = price;

  return (
    <div className=" shadow-lg h-[420px] relative shadow-gray-200 rounded-md ">
      <p className="bg-violet-700 px-4  top-6 relative  rounded-sm text-gray-100 font-semibold w-fit">
        {discount}% OFF
      </p>
      <Image
        src={src}
        width={400}
        height={350}
        className="rounded-t-md"
        alt="product images"
      />
      <div className="p-2">
        <p className="text-lg py-1 font-semibold">{title}</p>
        <div className="py-2 w-fit gap-3  flex font-semibold items-center justify-around">
          <p>৳ {parseInt(total.toString())} </p>
          <p className=" line-through text-gray-500">
            ৳ {parseInt(exprice.toString())}{" "}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-yellow-500 text-2xl">{"*".repeat(rating)}</div>
          <div className=" text-xl">
            <MdFavoriteBorder />
          </div>
        </div>
        <div className="text-center my-4">
         <Addtocart/>
        </div>
      </div>
    </div>
  );
}
