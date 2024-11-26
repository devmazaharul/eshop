import Productdetails from "@/components/sub/product/Productdetails";
import { getProductserver } from "@/data/ProductSrc";
import {
  productcartprop,
  productDetailsprop,
  Productparams,
} from "@/types/Sitetypes";

export default async function Page({ params }: Productparams) {
  const slug = await params;

  const productInfo = await getProductserver();

  const filterData = productInfo.filter((item: productcartprop) => {
    if (item.id === slug?.id[0]) {
      return item;
    }
  });

  return (
    <>
      {filterData.map(
        ({
          id,
          name,
          desc,
          price,
          rating,
          brand,
          size,
          discount,
          color,
          city,
        }: productDetailsprop) => (
          <Productdetails
            id={id}
            name={name}
            desc={desc}
            price={price}
            rating={rating}
            brand={brand}
            size={size}
            discount={discount}
            color={color}
            city={city}
            key={id}
          />
        )
      )}
    </>
  );
}
