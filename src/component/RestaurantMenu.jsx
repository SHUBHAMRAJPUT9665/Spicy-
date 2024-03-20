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
  const { name, avgRating,cloudinaryImageId, cuisines, locality, costForTwoMessage } =
    resData?.data?.cards[0]?.card?.card?.info;

    
  const { itemCards } =
    resData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

      const categories = resData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")


  if(!itemCards) return 

  return (
    <>
     <div className="text-center">
      <h1 className="font-bold mt-6 mb-3 text-3xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines}</p>

      {categories.map((category) => <RestaurantCategory  data={category?.card?.card} />)}
     </div>
    </>
  );
}

export default RestaurantMenu;