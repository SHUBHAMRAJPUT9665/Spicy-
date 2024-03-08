import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
// import { RESTAURANT_DETAILS_API_URL } from '../utils/constant';
function RestaurantMenu() {
  const [resData, setresData] = useState([]);
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9165757&lng=77.6101163&restaurantId=145611&catalog_qa=undefined&submitAction=ENTER"
    );
    const dataq = await data.json();
    setresData(dataq);
  };

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

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    resData?.data?.cards[0]?.card?.card?.info;


  return (
    <>
      <div>
        <h1 className="text-2xl text-center">{name}</h1>
        <h2>{costForTwoMessage}</h2>
        <h1>Menu</h1>
        <ul>
          <li>{cuisines.join(", ")}</li>
          <li>KFC</li>
          <li>Paneer Tikka</li>
        </ul>
        <img
          className="object-cover object-center rounded-t-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant logo"
        />
      </div>
    </>
  );
}

export default RestaurantMenu;
