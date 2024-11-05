import { Footer, HeroBanner } from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <div className="text-center text-[#324d67] mt-10">
        <h2 className="text-[40px] font-extrabold">Best Selling Products</h2>
        <p className="text-[16px] font-extralight">speakers of many variations</p>
      </div>
      <div>{["Product1", "Product2"].map((product) => product)}</div>
      <Footer/>
    </>
  );
};

export default Home;
