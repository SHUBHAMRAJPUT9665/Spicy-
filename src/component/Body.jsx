import React, { useState, useEffect } from "react";
import RestaruntCard from "./RestaruntCard";
import Header from "./Header";
import Shimmer from "./Shimmer";

function Body() {
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState(null);
  const ASI_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.0024&lng=73.7945&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  async function fetchData() {
    try {
      const response = await fetch(ASI_URL);
      const jsonData = await response.json();
      const restaurants = jsonData.data.cards
        .filter(card => card.card.card["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget")
        .flatMap(card => card.card.card.gridElements.infoWithStyle.restaurants);
      
      console.log(restaurants)
      setData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  
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
      <div>
        <button
          onClick={() => {
            const cc = data.filter(res => res.info.avgRating>4);
            // setData(cc)
            // console.log(cc)
          }}
          className="rounded-lg m-3 mb-0 px-6 text-center p-4 bg-amber-400"
        >
          {data ? "Filtered Restaurants" : "Filter"}
        </button>
      </div>
        <div className="flex justify-around mt-10 flex-wrap">
        {data?.map(restaurant => (
            <RestaruntCard key={restaurant?.info.id} resData={restaurant} />
          ))}
        </div>
    </div>
  );
}

export default Body;
