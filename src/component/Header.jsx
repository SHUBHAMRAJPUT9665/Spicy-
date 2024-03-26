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

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 py-2 md:px-6 md:py-3 shadow-xl">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-16 md:w-24"
            src="https://banner2.cleanpng.com/20180616/afx/kisspng-swiggy-office-business-online-food-ordering-delive-swiggy-5b251ebb823014.9894761415291593555333.jpg"
            alt=""
          />
          <span className="ml-2 md:ml-4 font-bold text-orange-400 border-black border-b-3">Other</span>
          <span className="text-orange-500 font-bold text-xl ml-2 md:ml-4">
            <i className="ri-arrow-down-s-line"></i>
          </span>
          <span className="hidden md:inline-block ml-2">2R6C+VR7, Durga Nagar, Nashik, Mah</span>
        </div>
        <nav className={`md:flex md:items-center ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row text-xl font-bold md:gap-8 md:ml-auto">
            <h1 onClick={() => navigate('/')} className="cursor-pointer hover:text-orange-400"><span><i className="ri-search-line"></i></span> Home</h1>
            <h1 onClick={() => navigate('/about')} className="cursor-pointer hover:text-orange-400"><span><i className="ri-discount-percent-line"></i></span> Offers</h1>
            <h1 onClick={() => navigate('/login')} className="cursor-pointer hover:text-orange-400"><span><i className="ri-chat-smile-line"></i></span> Help</h1>
            <h1 className="cursor-pointer hover:text-orange-400"><span><i className="ri-user-line"></i></span> Name</h1>
            <h1 onClick={() => navigate('/cart')} className="cursor-pointer hover:text-orange-400"><span><i className="ri-shopping-cart-line"></i></span> Cart ({cart.length})</h1>
          </div>
        </nav>
        <div className="md:hidden">
          <h1 onClick={toggleMenu} className="cursor-pointer hover:text-orange-400"><span><i className={`ri-${isMenuOpen ? 'close-line' : 'menu-line'}`}></i></span> Menu</h1>
        </div>
      </div>
    </header>
  );
}
export default Header;
