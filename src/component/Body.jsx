import React, { useState, useEffect } from "react";
import RestaruntCard from "./RestaruntCard";
import Header from "./Header";
import Shimmer from "./Shimmer";
import { cate } from "../utils/data";
import useOnlineStatus from "./Hooks/useOnlineStatus";

function Body() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  console.log(cate);

  const ASI_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  async function fetchData() {
    try {
      const response = await fetch(ASI_URL);
      const jsonData = await response.json();
      const restaurants = jsonData.data.cards
        .filter(
          (card) =>
            card.card.card["@type"] ===
            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
        )
        .flatMap(
          (card) => card.card.card.gridElements.infoWithStyle.restaurants
        );

      setData(restaurants);
      setFilteredData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredRestaurants = data.filter((res) =>
      res?.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredRestaurants);
  };

  if (onlineStatus == false)
    return (
      <h1 className="text-center text-2xl font-semibold text-orange-600 mt-8  ">
        Looks like you're offline! Please check your internert connection..
      </h1>
    );

  if (data.length == 0) {
    return (
      <div className="flex flex-wrap">
        <Shimmer />
        <Shimmer />
        <Shimmer />
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
    <>
      <div className="max-w-[1200px] mx-auto p-5">
        <div className="flex justify-between  items-center">
          <div className="text-[25px] font-bold">What's on your mind?</div>
          <div className="flex items-center">
            <div className="w-[30px]  flex justify-center items-center h-[30px] bg-[#e2e2e7] font-bold text-xl  rounded-full mx-2">
              <i class="ri-arrow-left-line"></i>
            </div>
            <div className="w-[30px] fo flex justify-center items-center h-[30px] bg-[#e2e2e7] font-bold text-xl rounded-full mx-2">
              <i class="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          {cate.map((cat) =>{
            return(
              <div style={{
                transform:`translate()`
              }} className="w-[150px] shrink-0 ">
                <img src={cat.url} alt="" />
              </div>
            )
          })}

        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="flex justify-between"></div>
        </div>
        <div className="flex   mt-10 flex-wrap">
          {filteredData?.map((restaurant, index) => (
            <RestaruntCard
              key={`${restaurant?.info?.id}-${index}`}
              resData={restaurant}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Body;
