import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="p-[100px_40px] bg-[#dcdcdc] rounded-[15px] relative h-[500px] leading-[0.9] w-full">
      <div className=" text-[20px]">
        <p className="text-gray-500 text-sm font-bold font-serif">
          {heroBanner?.smallText}
        </p>
        <h3 className=" text-[4rem]  font-semibold mt-[4px] font-serif">
          {heroBanner?.midText}
        </h3>
        <h1 className="text-[10rem] text-white  uppercase font-serif">
          {heroBanner?.largeText1}
        </h1>
        <img
          src={urlFor(heroBanner?.image)}
          alt="headphones"
      
          className="absolute  top-0  right-0  md:right-70"
        />
        <div className="">
          <Link href={`/product/${heroBanner?.product}`}>
            <button
              type="button"
              className="outline-none  rounded-[15px] mt-[40px] bg-[#f02d34] shadow-md p-[10px_16px]  text-white border-none text-[16px] font-medium cursor-pointer z-[10000]"
            >
              {heroBanner?.buttonText}
            </button>
          </Link>
          <div className="absolute right-[8%] bottom-[3%] w-[300px] flex flex-col text-gray-500">
            <h4 className="mb-[12px]  font-semibold whitespace-nowrap text-xs justify-end flex font-serif">
              {heroBanner?.desc}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
