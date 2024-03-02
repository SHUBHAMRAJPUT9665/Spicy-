import React from "react";
import RestaruntCard from "./RestaruntCard";
import Header from "./Header";
import resList from "../utils/data";
import { useState } from "react";
import { useEffect } from "react";

function Body() {
  const [data, setdata] = useState(null);
  const fetchData = async () => {
    const data = fetch("www.goole.com");
    const jsonData = await data.json();
    
  }
  useEffect(() => {
   console. log("useeffect called...");
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
