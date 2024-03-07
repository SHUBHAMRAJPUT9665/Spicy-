import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
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
  console.log(resData);

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

  return (
    <div>
      <h1>{resData?.data?.cards[0]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Paneer</li>
        <li>KFC</li>
        <li>Paneer Tikka</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
