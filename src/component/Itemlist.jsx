import React from "react";
import { CDN_URL } from "../utils/constant";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const Itemlist = ({ item }) => {
  const dispatch = useDispatch();
  // Check if item is defined and is an array before attempting to map over it
  if (!item || !Array.isArray(item)) {
    return <div>No items to display</div>;
  }

  console.log(item);

  return (
    <div className="">
      {item.map((item) => (
        <div
          className="p-2 m-2  w-full  flex items-center justify-between border-gray-400 border-t-2 "
          key={item.card.info.id}
        >
          <div className="w-3/4 p-2 sm:w-10/12">
            <span>{item.card.info.name}</span> <br />
            <span>₹{item.card.info.price / 100}</span>
            <p className="text-xs text-gray-500 pt-3 pb-4">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-1/4  sm:w-1/6">
            <div>
              <button
                onClick={() => {
                  dispatch(addItem(item.card.info));
                }}
                className="sm:p-2 px-2 text-green-600 mx-8 sm:text-sm sm:mx-12 rounded-md bg-white shadow-lg absolute"
              >
                Add
              </button>
            </div>
            <img
              className="sm:w-32 m-3 bg-white  w-20 h-20 rounded-md sm:h-20"
              src={CDN_URL + item.card.info.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
