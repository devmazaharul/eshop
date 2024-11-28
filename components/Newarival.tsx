import React from "react";
import Product from "./Product";
import { NewArivarProp } from "@/types/Sitetypes";
import { getProductserver } from "@/data/ProductSrc";

export default async function Newarival() {
  const data = await getProductserver();

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold ">New Arival</h1>

        <div>
          <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {data &&
              data.slice(0, 20).map((item: NewArivarProp) => {
                return (
                  <Product
                    src="/pro2.jpg"
                    title={item.name}
                    rating={item.rating}
                    desc={item.desc}
                    price={item.price}
                    discount={item.discount}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
          </div>
          <div className="flex w-fit mx-auto items-center my-3 py-4 gap-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded-md">
              PREV
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
