import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/client";

const HeroBanner = ({ heroBanner }) => {
  console.log(heroBanner, "heroBanner");
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
          //   width={450}
          //   height={450}
          className="absolute  top-0 md:right-56 left-20 md:left-auto"
        />
        <div className="">
          <Link href={`/product/${heroBanner?._id}`}>
            <button
              type="button"
              className="outline-none rounded-[15px] mt-[40px] bg-[#f02d34] shadow-md p-[10px_16px]  text-white border-none text-[16px] font-medium cursor-pointer z-[10000]"
            >
              {heroBanner?.buttonText}
            </button>
          </Link>
          <div className="absolute right-[8%] bottom-[3%] w-[300px] flex flex-col text-gray-500">
            <h4 className="mb-[12px]  font-semibold whitespace-nowrap text-xs justify-end flex font-serif">
              {heroBanner?.desc}
            </h4>
            {/* <p className="text-[#5f5f5f] text-xs flex justify-end font-[100]">
              {heroBanner?.desc}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
