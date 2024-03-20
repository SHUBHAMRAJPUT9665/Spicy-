import React from 'react'
import Itemlist from './Itemlist'

const RestaurantCategory = ({data}) => {

  return (
    
      <div className='w-5/6 sm:w-6/12 mx-auto  rounded-md font-semibold   my-4 m-auto bg-gray-200 p-4 text-md'>
        <div className='flex justify-between'>
        <span>{data.title}</span>
        <span><i class="ri-arrow-down-s-fill"></i></span>
        </div>
        <Itemlist item={data.itemCards}/>
      </div>
    
  )
}

export default RestaurantCategory
