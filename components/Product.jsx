import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

const Product = ({ product: { slug, image, name, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug?.current}`} className="flex">
        <div className=" hover:transform hover:scale-110 cursor-pointer text-[#324d67] transform transition-transform duration-500 ease">
          <img
            src={urlFor(image && image[0])}
            width={150}
            height={150}
            alt="product-img"
            className="bg-[#ebebeb] object-contain w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-[15px] transform transition-transform duration-500 ease-in-out"
          />
          <p className="font-medium  flex  justify-center text-sm mt-2 ">
            {name}
          </p>
          <p className="mt-[6px] flex  justify-center text-black font-bold text-sm">
            AED {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
