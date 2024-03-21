import React, { useState } from 'react';
import Itemlist from './Itemlist';

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true); // Set to true by default

  const handleToggle = () => {
    setShowItems(prevState => !prevState);
  };
  return (
    <div className='w-5/6 sm:w-6/12 mx-auto rounded-md font-semibold my-4 m-auto bg-gray-100 p-4 text-md'>
      <div className='flex justify-between cursor-pointer' onClick={handleToggle}>
        <span className='font-bold text-md sm:text-xl'>{data.title}</span>
        <span><i className="ri-arrow-down-s-fill"></i></span>
      </div>
      {showItems && <Itemlist item={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
