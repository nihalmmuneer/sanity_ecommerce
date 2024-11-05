import { Footer, HeroBanner } from "@/components";
import { client } from "@/lib/client";
import React from "react";

const Home = ({ products, bannerData }) => (
  <>
    {console.log(products, "products")}
    {console.log(bannerData, "bannerData")}
    <HeroBanner  heroBanner={bannerData[0]}/>
    <div className="text-center text-[#324d67] mt-10">
      <h2 className="text-[40px] font-extrabold">Best Selling Products</h2>
      <p className="text-[16px] font-extralight">speakers of many variations</p>
    </div>
    <div className="flex justify-center mt-[20px] w-full gap-[15px] flex-wrap">{products.length > 0 && products.map((product) => product?.name)}</div>
    <Footer />
  </>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
