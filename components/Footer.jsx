import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-[#324d67] gap-2 text-center flex flex-col p-[30px_10px] font-bold justify-center items-center">
      <p>@2024 SnapMart Shopify All rights reserved</p>
      <p className="flex gap-2">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
