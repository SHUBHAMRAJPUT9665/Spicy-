import React, { useState, useEffect } from "react";
import RestaruntCard from "./RestaruntCard";
import Header from "./Header";
import Shimmer from "./Shimmer";

function Body() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ASI_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.0024&lng=73.7945&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

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

  if(data.length == 0){
    return(
      <div className="flex flex-wrap">
         <Shimmer />
         <Shimmer />
         <Shimmer />
         <Shimmer />
         <Shimmer />
         <Shimmer /> 
         <Shimmer />
      </div>
    )
  }
  return (
    <div>
      <div className="flex">
        <div>
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Restaurant"
            type="text"
            className="m-3 px-4 py-2 border-2 border-sky-500  rounded-lg "
          />
          <button
            className="p-2 bg-orange-400 rounded-lg px-3 text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex  47v re mt-10 flex-wrap">
        {filteredData?.map((restaurant, index) => (
          <RestaruntCard
            key={`${restaurant?.info?.id}-${index}`}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
}
export default Body;
