import React from "react";
import Product from "./Product";
import { NewArivarProp } from "@/types/Sitetypes";
import { getProductserver } from "@/data/ProductSrc";

export default async function Newarival() {

  const data=await getProductserver()


  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold ">New Arival</h1>

        <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {data &&
            data.map((item:NewArivarProp) => {
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
      </div>
    </div>
  );
}
