import React, { useState } from 'react';
import Itemlist from './Itemlist'; // Assuming Itemlist is a component that renders a list of items

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true); // State to track whether items should be shown or hidden

  // Function to toggle the display of items
  const handleToggle = () => {
    setShowItems(prevState => !prevState); // Toggle the state
  };

  return (
    <div className='w-5/6 sm:w-6/12 mx-auto rounded-md font-semibold my-4 m-auto bg-gray-100 p-4 text-md'>
      {/* Clickable area to toggle items */}
      <div className='flex justify-between cursor-pointer' onClick={handleToggle}>
        <span className='font-bold text-md sm:text-xl'>{data.title}</span> {/* Display category title */}
        <span><i className="ri-arrow-down-s-fill"></i></span> {/* Arrow icon indicating toggle */}
      </div>
      {/* Render Itemlist component only if showItems is true */}
      {showItems && <Itemlist item={data.itemCards} />} {/* Pass itemCards data to Itemlist component */}
    </div>
  );
};

export default RestaurantCategory;
