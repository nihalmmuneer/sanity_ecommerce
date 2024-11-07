import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { Fireworks } from "@/lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    Fireworks();
  }, []);
  return (
    <div className=" min-h-[70vh] flex justify-center items-center">
      <div className="flex w-[1000px] gap-2 items-center justify-center flex-col rounded-2xl  bg-[#dcdcdc] p-[50px]">
        <p className="text-6xl text-green-800">
          <BsBagCheckFill />
        </p>
        <h2 className="whitespace-nowrap capitalize text-[#324d67]  text-2xl md:text-4xl font-extrabold mt-5">
          Thank you for your order!
        </h2>
        <p className="font-semibold text-slate-700 text-base">
          Check your email inbox for the receipt
        </p>
        <p className="font-semibold  text-black text-xs md:flex flex-col items-center">
          If you have any queries, please email
          <a href="mailto:enquiryhelp@gmail.com" className="text-[#f02d34]">
            {" "}
            enquiryhelp@gmail.com
          </a>
        </p>
        <Link
          href="/"
          className="bg-red-700  p-2 m-4 rounded-lg font-bold flex justify-center 
          transform transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
        >
          <button type="button" className="text-white flex items-center gap-2">
            Continue Shopping{" "}
            <span>
              <AiOutlineShoppingCart size={20} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
