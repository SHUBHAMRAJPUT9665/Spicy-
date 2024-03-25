import React from "react";

import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/CartSlice";

const Cart = () => {
  const item = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  if (item.length == 0)
    return <h1 className="font-bold text-xl text-center p-3">no item added</h1>;
  return (
    <div className="w-5/6 sm:w-6/12 mx-auto rounded-md font-semibold my-4 m-auto bg-gray-100 p-4 text-md">
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-md sm:text-xl">cart</span>
        <span
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </span>
        <span>
          <i className="ri-arrow-down-s-fill"></i>
        </span>
      </div>
      <div>
        <div className="">
          {item.map((item) => (
            <div
              className="p-2 m-2  w-full  flex items-center justify-between border-gray-400 border-t-2 "
              key={item.id}
            >
              <div className="w-3/4 p-2 sm:w-10/12">
                <span>{item.name}</span> <br />
                <span>₹{item.price / 100}</span>
                <p className="text-xs text-gray-500 pt-3 pb-4">
                  {item.description}
                </p>
              </div>
              <div className="w-1/4  sm:w-1/6">
                <img
                  className="sm:w-32 m-3 bg-white  w-20 h-20 rounded-md sm:h-20"
                  src={CDN_URL + item.imageId}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="p-2 m-2  w-full  flex items-center justify-between border-gray-400 border-t-2 "
        key={item.id}
      >
        <div className="w-3/4 p-2 sm:w-10/12">
          <span className="font-bold sm:text-xl p-3 mr-3">Grand Total</span>
          <span>₹{cartTotal}</span>
        </div>
        <div>
          <h1 className="sm:text-xl  cursor-pointer p-2 bg-green-400 mx-3 px-4 rounded-xl">
            order
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
