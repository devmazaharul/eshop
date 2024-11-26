import Filter from "./Filter";
import Product from "@/components/Product";
import Link from "next/link";
import "./search.css";
import { productDetailsprop } from "@/types/Sitetypes";
import { getProductserver } from "@/data/ProductSrc";

export default async function Usepage({
  searchParams
}: {
  searchParams: Promise<{ q: string[] | number[] } | undefined>;
}) {
  const query = (await searchParams)?.q;

  const searchProduct = await getProductserver();

  const newArr =
    searchProduct &&
    searchProduct.filter((item: productDetailsprop) => {
      return item.name.toLowerCase().includes(`${query}`);
    });

  return (
    <div className="md:grid md:grid-cols-6 p-3 gap-4">
      <div className="md:col-span-1">
        <Filter />
      </div>

      <div className="py-4 col-span-5 ">
        <h1 className="text-xl font-semibold">
          Search Result {newArr && newArr.length}
        </h1>

        <p className="text-red-500">
          {newArr.length == 0 ? "No data found" : ""}
        </p>

        <div className="grid py-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {newArr &&
            newArr.map((item: productDetailsprop) => (
              <Link
                key={item.id}
                href={`/product/details/${item.id}/${item.name
                  .split(" ")
                  .join("-")}`}
              >
                <Product
                  src="/pro2.jpg"
                  title={item.name}
                  desc={item.desc}
                  discount={item.discount}
                  price={item.price}
                  rating={item.rating}
                  key={item.id}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
