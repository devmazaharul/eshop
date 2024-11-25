"use client";
import { useSearchParams } from "next/navigation";
import Filter from "./Filter";
import Product from "@/components/Product";
import Link from "next/link";
import "./search.css";
import useGetproduct from "@/hook/useGetproduct";
import { productcartprop } from "@/types/Sitetypes";
export default function Usepage() {
  const searchParams = useSearchParams();
  const getQuery = searchParams.get("q")

console.log( getQuery)
  const { laoding, err, searchProduct } = useGetproduct(getQuery);

  const newArr =
    searchProduct &&
    searchProduct.filter((item:productcartprop) => {
      return item.name.toLowerCase().includes(`${getQuery}`);
    });

  return (
    <div className="md:grid md:grid-cols-6 p-3 gap-4">
      <div className="md:col-span-1">
        <Filter />
      </div>

      <div className="py-4 col-span-5 ">
        <h1 className="text-xl font-semibold">Search Result {newArr && newArr.length}</h1>

        {laoding ? <p className="text-blue-500">Loading...</p> : ""}

        {err.length > 0 ? (
          <h1 className="text-xl place-content-center text-center text-red-500 font-extralight">
            {err && err}
          </h1>
        ) : (
          <div className="grid py-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {newArr &&
              newArr.map((item:{id:number,name:string,price:number}) => (
                <Link key={item.id} href={`/detils/${item.id}`}>
                  <Product
                    src="/pro2.jpg"
                    title={item.name}
                    rating={5}
                    desc="hellow world"
                    price={item.price}
                    discount={5}
                  />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
