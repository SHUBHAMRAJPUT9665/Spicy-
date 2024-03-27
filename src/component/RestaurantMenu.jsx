import React from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'
import useRestaurantMenu from "./Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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


  const { name, avgRating,cloudinaryImageId, cuisines, locality, costForTwoMessage,areaName } =
    resData?.data?.cards[0]?.card?.card?.info;

    
  const { itemCards } =
    resData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

      const categories = resData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")


  if(!itemCards) return 

  return (
    <>

<div className="sm:flex flex-col">
        <div className="ml-3 sm:ml-36 sm:flex sm:justify-around items-center">
          <div>
            <h1 className="font-bold mt-6 mb-3 text-xl sm:text-3xl">{name}</h1>
            <span className="mr-4 text-lg text-gray-500">{areaName}</span>
            <span className="text-lg text-gray-500">{cuisines}</span>
          </div>
          
            <span className="text-xl">
              <span className="text-green-600 p-2">★</span>
              {avgRating}
            </span>
          
        </div>
        {categories.map((category) => (
          <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
        ))}
      </div>
    </>
  );
}

export default RestaurantMenu;