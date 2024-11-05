import Link from "next/link";
import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="p-[100px_40px] bg-[#dcdcdc] rounded-[15px] relative h-[500px] leading-[0.9] w-full">
      <div className=" text-[20px]">
        <p>SMALL TEXT</p>
        <h3 className=" text-[4rem]  font-semibold mt-[4px]">MID TEXT</h3>
        <Image
          src="/headphones_c_1.webp"
          alt="headphones"
          width={450}
          height={450}
          className="absolute top-0 right-5"
        />
        <div className="">
          <Link href={"/product/ID"}>
            <button type="button" className="rounded-[15px] mt-[40px] bg-[#f02d34] p-[10px_16px] text-white border-none text-[18px] font-medium cursor-pointer z-[10000]">BUTTON TEXT</button>
          </Link>
          <div className="absolute right-[10%] bottom-[5%] w-[300px] flex flex-col text-[#324d67] leading-[1.3]">
            <h5 className="mb-[12px] font-[700] text-[16px] justify-end flex">
              Description
            </h5>
            <p className="text-[#5f5f5f] flex justify-end font-[100]">
              DESCRIPTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
