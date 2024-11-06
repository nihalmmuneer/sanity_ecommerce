import React from "react";
import { client, urlFor } from "@/lib/client";
import { useState } from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";

const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { name, price, details, image } = product;
  console.log(product, "productDetails product");
  console.log(products, "productDetails products");
  return (
    <div>
      <div className="md:flex gap-28 m-10 mt-14 text-[#324d67]">
        <div className="">
          <div className="bg-[#ebebeb] rounded-[15px] w-[400px] h-[400px] hover:bg-[#f02d34] cursor-pointer transition-transform ease-in-out duration-300">
            <img src={urlFor(image && image[index])} className="w-[400px] h-[400px]"/>
          </div>
          <div className="flex items-center gap-2 w-24 h-24 mt-4 ">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={`object-cover cursor-pointer ${
                  i === index ? "bg-[#f02d34]" : ""
                } bg-[#ebebeb] rounded-[15px] w-24 h-24 transform transition-transform duration-500 ease-in-out`}
                alt="product-img"
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <h1 className="font-bold text-2xl">{name}</h1>
          <div className="text-[#f02d34] mt-[10px] flex items-center gap-1">
            <div className="flex items-center text-sm">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-[#324d67] mt-0 text-xs">(20)</p>
          </div>
          <h4 className="text-sm font-bold mt-3">Details:</h4>
          <p className="text-sm mt-2 text-gray-500">{details}</p>
          <p className="text-[#dd454a] font-bold text-lg mt-3 ">${price}</p>
          <div className="flex items-center gap-2 mt-3">
            <h3 className="font-bold text-sm">Quantity:</h3>
            <p className="border  border-gray-400 flex items-center  cursor-pointer">
              <span className="border-gray-400 text-[16px] text-red-600 px-2">
                <AiOutlineMinus />
              </span>
              <span className="border-r-[1px] border-l-[1px] border-gray-400 text-[16px] px-2">
                0
              </span>
              <span className="text-green-700 text-[16px] px-2">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="gap-5 mt-9 flex items-center ">
            <button
              type="button"
              className="hover:transform hover:scale-110 border rounded-lg px-5 py-2.5 border-[#f02d34] text-[16px] font-medium bg-white cursor-pointer  w-[200px] transform transition-transform duration-500 ease-in-out text-[#f02d34]"
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="hover:transform rounded-lg hover:scale-110 border px-5 py-2.5 bg-[#f02d34] text-[16px] font-medium text-white cursor-pointer  w-[200px] transform transition-transform duration-500 ease-in-out "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <h2 className="text-2xl text-[#324d67] text-center font-serif font-bold">
          You may also like
        </h2>
        <div className="relative h-[400px] w-full overflow-x-hidden">
          <div className="flex gap-10 justify-center mt-5 absolute whitespace-nowrap hover:animation-paused animate-marquee">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  // Query to get all products and their slugs
  const query = `*[_type == "product"] { slug }`;
  const products = await client.fetch(query);
  console.log(products, "getStaticProps products");

  // Map over the products and create paths with the slug
  const paths = products.map((product) => ({
    params: { slug: product.slug.current }, // Here, 'slug' is the dynamic parameter
  }));

  // Return the paths and set fallback to false (optional, based on your needs)
  return {
    paths,
    fallback: false, // `false` means other paths not returned by getStaticPaths will result in a 404
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const productsQuery = '*[_type == "product"]';
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;