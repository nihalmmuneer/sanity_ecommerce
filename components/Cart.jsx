import React, { useRef } from "react";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePayCircle,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { FaCreditCard } from "react-icons/fa";
import getStripe from "@/lib/getStripe";
import toast from "react-hot-toast";

const Cart = () => {
  const cartRef = useRef();
  const {
    setShowCart,
    totalQuantities,
    cartItems,
    totalPrice,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (!response.ok) {
      console.error("Error creating Stripe checkout session");
      return;
    }

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div
      ref={cartRef}
      className="bg-black/50 h-full w-full right-0 fixed top-0 z-[100] md:w-[100vw] transition-transform transform duration-100"
    >
      <div className="h-[100vh] w-[400px] md:w-[400px] lg:w-[600px]  float-right relative bg-white">
        <button
          className="flex  p-[20px_10px] items-center text-lg font-medium cursor-pointer gap-2 ml-2 border-none bg-transparent"
          type="button"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="ml-1 text-base sm:text-sm xs:text-xs">Your Cart</span>
          <span className="text-[#f02d34] text-base ml-2 sm:ml-0 sm:text-sm">
            {totalQuantities} (items)
          </span>
        </button>
        {cartItems.length < 1 && (
          <div className="w-[300px]  flex flex-col justify-center items-center">
            <AiOutlineShopping size={150} className="text-gray-800" />
            <h3 className="text-sm font-semibold text-gray-600 font-serif">
              Your shopping bag is empty
            </h3>
            <Link href={"/"} className="w-full flex justify-center">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="w-auto md:w-auto gap-1 flex  justify-center shadow-md items-center bg-[#f02d34] p-[10px_12px] rounded-[15px] mt-7 text-white cursor-pointer  text-sm border-none max-w-[400px] font-bold transform scale-100 transition-transform duration-500 ease-in-out hover:scale-105"
              >
                Continue Shopping
                <span>
                  <AiOutlineShoppingCart size={20} />
                </span>
              </button>
            </Link>
          </div>
        )}
        <div className="mt-[15px] overflow-auto max-h-[70vh] p-[20px_10px]">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item?._id} className="flex p-5 sm:p-2 gap-5 w-full">
                <img
                  src={urlFor(item?.image[0])}
                  alt="product-img"
                  className="w-[110px] h-[110px] rounded-[15px] bg-[#ebebeb]"
                />
                <div className="w-full">
                  <div className="flex flex-wrap items-center justify-between gap-10">
                    <h3 className="text-[18px] text-[#324d67] font-bold sm:text-base">
                      {item?.name}
                    </h3>
                    <h3 className="text-[14px] text-black font-bold sm:text-sm">
                      AED {item?.price}
                    </h3>
                  </div>
                  <div className="mt-[40px] flex justify-between">
                    <div>
                      <p className="border  border-gray-400 shadow-sm flex items-center  cursor-pointer">
                        <span
                          className="border-gray-400 text-[16px] hover:scale-125 transition-transform  text-red-600 px-2"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className=" outer-none border-r-[1px] border-l-[1px] border-gray-400 text-[16px] px-2">
                          {item?.quantity}
                        </span>
                        <span
                          className="text-green-700 text-[16px] px-2 hover:scale-125 transition-transform"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-[#f02d34] cursor-pointer bg-transparent text-xl border-none"
                      onClick={() => onRemove(item?._id)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute bottom-2 right-[5px] w-full p-[20px_50px] ">
            <div className="flex justify-between items-center">
              <h3 className="text-[17px] font-semibold">Subtotal:</h3>
              <h3 className="text-[17px] font-bold">
                AED {totalPrice.toFixed(2)}
              </h3>
            </div>
            <div className="bg-red-600  p-2 m-4 rounded-lg font-bold flex justify-center shadow-md">
              <button
                type="button"
                className="flex justify-center  items-center gap-1 text-white uppercase text-sm"
                onClick={handleCheckout}
              >
                Pay With Stripe
                <span>
                  <FaCreditCard />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
