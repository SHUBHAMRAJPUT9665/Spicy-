import React from 'react';
import { CDN_URL } from '../utils/constant';

export const RestaruntCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className='hover:cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2'>
      <div className='bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl'>
        <img className='w-full h-40 object-cover object-center rounded-t-lg' src={
          CDN_URL +
          cloudinaryImageId
        } alt="restaurant logo" />
        <div className='p-4'>
          <h1 className='text-xl font-semibold mb-2'>{name}</h1>
          <p className='text-gray-700 mb-2'>{deliveryTime} min</p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <svg className='w-4 h-4 text-yellow-500 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M10 1L12.38 6.74H18.28L13.63 10.24L15 16.02L10 12.76L5 16.02L6.38 10.24L1.72 6.74H7.62L10 1Z' />
              </svg>
              <span className='text-gray-600'>{avgRating}</span>
            </div>
            <span className='text-gray-700'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaruntCard;
