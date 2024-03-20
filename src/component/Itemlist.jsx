import React from "react";
import { CDN_URL } from "../utils/constant";

const Itemlist = ({ item }) => {
  // Check if item is defined and is an array before attempting to map over it
  if (!item || !Array.isArray(item)) {
    return <div>No items to display</div>;
  }

  console.log(item)

  return (
    <div className="">
      {item.map((item) => (
        <div className=" p-2 m-2 flex items-center justify-between border-gray-400 border-t-2 " key={item.card.info.id}>
          <div className="">
            <span>{item.card.info.name}</span> <br />
            <span>₹{item.card.info.price / 100}</span>
            <p className="text-xs pt-3 pb-4">{item.card.info.description}</p>
          </div>
          <div>
            <img className=" w-16 h-14 sm:w-24 rounded-md sm:h-20" src={CDN_URL + item.card.info.imageId} alt="" />
          </div>

        </div>
      ))}
    </div>
  );
};

export default Itemlist;
