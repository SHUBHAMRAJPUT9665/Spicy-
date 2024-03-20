import React from 'react'
import Itemlist from './Itemlist'

const RestaurantCategory = ({data}) => {

  return (
    <div>
      <div className='w-6/12 mx-auto flex justify-between rounded-md font-semibold   my-4 m-auto bg-gray-200 p-4 text-md'>
        <span>{data.title}</span>
        <span><i class="ri-arrow-down-s-fill"></i></span>
      </div>

      <Itemlist item={data.itemCards}/>
    </div>
  )
}

export default RestaurantCategory
