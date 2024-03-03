import React from "react";
import RestaruntCard from "./RestaruntCard";
import Header from "./Header";
import resList from "../utils/data";
import { useState } from "react";
import { useEffect } from "react";

function Body() {
  const [data, setdata] = useState(null);
  const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    
const fetchData = async () =>{
  const data = fetch(API_URL);
  const swiggyData = await data.json();
  console.log(swiggyData)
}
  
  useEffect( async() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <button
            onClick={() => {
            const data2 = resList.filter((res) => res.data.avgRating > 4);
            setdata(data2);
          }}
          className=" rounded-lg m-3 mb-0 px-6 text-center p-4 bg-amber-400"
        > {data?"Filtred Restaurant":"Filter"}
        </button>
      </div>
      <div className="flex justify-around mt-10 flex-wrap ">
        {data
          ? data.map((restaurant) => (
              <RestaruntCard key={restaurant.data.id}  resData={restaurant} />
            ))
          : resList.map((restaurant) => (
              <RestaruntCard key={restaurant.data.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
}
export default Body;
