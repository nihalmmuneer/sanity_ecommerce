import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";
const Navbar = () => {
  const { totalQuantities, showCart, setShowCart } = useStateContext();
  return (
    <div className="flex m-[13px_18px] justify-between relative">
      <p className="text-gray-500 text-[15px]">
        <Link href="/" className="font-serif">
          SnapMart
        </Link>
      </p>
      <button
        onClick={()=>setShowCart(true)}
        type="button"
        className="text-[20px] text-gray-500 cursor-pointer relative hover:scale-125 transform transition-transform ease-in duration-500 border-none bg-transparent"
      >
        <AiOutlineShopping />
        <span className="absolute right-[-8px] top-[-8px] bg-[#f02d34] text-[10px] text-white w-[16px] h-[16px] text-center rounded-full">
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
