import React from "react";
import { CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

export const RestaruntCard = (props) => {
  const { resData } = props;

  const navigate = useNavigate();

  if (!resData) return null; // Returning null if resData is falsy

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  console.log(cloudinaryImageId)
  return (
    <div
      onClick={() => {
        navigate("restaurant/" + resData?.info?.id);
      }}
      className="cursor-pointer w-full sm:w-1/3 md:w-full overflow-hidden lg:w-1/3 xl:w-1/4 mb-3 px-2"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
        <img
          className="w-full h-40 sm:h-40 object-cover object-center rounded-t-lg"
          src={CDN_URL + cloudinaryImageId}
          // src="https://b.zmtcdn.com/data/pictures/5/1600135/2d2b8f79d488269f7afbfba0daadf6dd.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="restaurant logo"
        />
        <div className="p-4">
    <h1 className="text-md sm:text-xl font-semibold mb-2">{name}</h1>
    <p className="text-gray-700 mb-2">{deliveryTime}</p>
    <p className="text-gray-700 mb-2">{costForTwo} min</p>

    <div className="flex justify-between  items-center">
        <div className=" flex items-center">
            <span className="text-gray-600 text-sm font-semibold sm:text">{avgRating}</span>
            <svg
                className="w-4 h-4 text-yellow-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 1L12.38 6.74H18.28L13.63 10.24L15 16.02L10 12.76L5 16.02L6.38 10.24L1.72 6.74H7.62L10 1Z" />
            </svg>
        </div>
    </div>
</div>

      </div>
    </div>
  );
};

export default RestaruntCard;
