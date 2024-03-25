import React from "react";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const data = useContext(UserContext);
  const cart = useSelector((state) => state.cart.items);
  const OnlineStauts = useOnlineStatus();

  return (
    <>
      <header className="p-[15px] shadow-xl ">
        <div className="max-w-[1250px] flex items-center  mx-auto ">
          <div className="w-[100px]">
            <img
              className="w-full"
              src="https://banner2.cleanpng.com/20180616/afx/kisspng-swiggy-office-business-online-food-ordering-delive-swiggy-5b251ebb823014.9894761415291593555333.jpg"
              alt=""
            />
          </div>
          <div className="">
            {" "}
            <span className="font-bold text-orange-400 border-black  border-b-[3px] ">
              Other
            </span>{" "}
            2R6C+VR7, Durga Nagar, Nashik, Mah{" "}
            <span className="text-orange-500 font-bold text-xl ml-4">
              <i class="ri-arrow-down-s-line"></i>
            </span>{" "}
          </div>
          <nav className="flex  gap-7 ml-auto text-[20px] font-semibold ">
            <h1 onClick={() => navigate('/')} className="cursor-pointer hover:text-orange-400"><span><i class="ri-search-line"></i></span> Home</h1>
            <h1 onClick={() => navigate('/about')} className="cursor-pointer hover:text-orange-400"><span><i class="ri-discount-percent-line"></i></span> Offeres</h1>
            <h1 onClick={() => navigate('/login')}  className="cursor-pointer hover:text-orange-400"><span><i class="ri-chat-smile-line"></i></span> Help</h1>
            <h1 className="cursor-pointer hover:text-orange-400"><span><i class="ri-user-line"></i></span> Name</h1>
            <h1 onClick={() => navigate('/cart')}  className="cursor-pointer hover:text-orange-400"> <span><i class="ri-shopping-cart-line">({cart.length})</i></span> Cart</h1>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
