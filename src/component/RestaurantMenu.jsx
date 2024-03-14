import React from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'
import useRestaurantMenu from "./Hooks/useRestaurantMenu";

function RestaurantMenu() {
  const {resId}  = useParams();
  const resData = useRestaurantMenu(resId)

  if (resData.length == 0) {
    return (
      <div className="flex flex-wrap">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }
  const { name, avgRating,cloudinaryImageId, cuisines, locality, costForTwoMessage } =
    resData?.data?.cards[0]?.card?.card?.info;
    
  const { itemCards } =
    resData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  if(!itemCards) return 

  return (
    <>
      <div>
        <div className="">
          <div>
            <h1 className=" text-2xl text-orange-700 text-center font-medium p-1">
              {name}
            </h1>
            <h1 className="text-center">{cuisines}</h1>
            <h3 className=" text-center">{locality}</h3>
            <p className="text-center">{costForTwoMessage}</p>
          </div>
          <div className=" p flex w-8 h-7 p-10 font-medium text-sm ">
            <h1 >{avgRating}</h1>
            <span>Rate</span>
          </div>

          <div className="">
            <h1 className="px-10 text-xl font-medium text-orange-600">Menu</h1>
           <ul className="px-20 font-medium">
            {itemCards.map(item => <li >{item.card.info.name}</li> )}
           </ul>
          </div>
      </div>
      </div>
    </>
  );
}

export default RestaurantMenu;