import React from "react";
import { urlFor } from "@/lib/client";
const FooterBanner = ({
  footerBanner: {
    image,
    largeText1,
    largeText2,
    midText,
    smallText,
    discount,
    saleTime,
    desc,
  },
}) => {
  return (
    <div className="md:p-[100px_40px] p-[70px_10px] bg-[#f02d34] rounded-[15px] relative h-[440px] leading-none text-white w-full mt-[120px]">
      <div className="flex  justify-between ">
        <div className="">
          <p className="md:m-[18px] m-2 font-serif">{discount}</p>
          <h3 className="font-[900] md:text-[80px] md:ml-[25px] text-[60px]">
            {largeText1}
          </h3>
          <h3 className="font-[900] md:text-[80px] md:ml-[25px] text-[60px]">
            {largeText2}
          </h3>
          <p className="md:m-[18px] m-2 font-serif">{saleTime}</p>
        </div>
        <div className="leading-[1.5]">
          <p className="text-[14px] font-serif">{smallText}</p>
          <h3 className="font-extrabold md:text-[60px] text-[40px]">
            {midText}
          </h3>
          <p className="text-[14px] font-serif">{desc}</p>
        </div>
        <img
          src={urlFor(image)}
          alt="footer-img"
          className="absolute top-[-25%] md:left-[25%]"
        />
      </div>
    </div>
  )
};

export default FooterBanner;
