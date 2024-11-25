"use client";
import useGetproduct from "@/hook/useGetproduct";
import Link from "next/link";
import React from "react";
import Product from "./Product";
import { NewArivarProp } from "@/types/Sitetypes";

export default function Newarival() {
  const {  searchProduct } = useGetproduct("1");

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold ">New Arival</h1>

        <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {searchProduct &&
            searchProduct.map((item:NewArivarProp) => {
              return (
                <Link key={item.id} href={`/detils/${item.id}`}>
                  <Product
                    src="/pro2.jpg"
                    title={item.name}
                    rating={5}
                    desc="hellow world"
                    price={item.price}
                    discount={25}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
