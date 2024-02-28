import React from 'react'
import RestaruntCard from './RestaruntCard'
import Header from './Header'

function Body() {
  return (
    
 <div>
            <Header />
            <div className='flex justify-around mt-10 flex-wrap '>
            <RestaruntCard title={'Hotel Raj'} img={'https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg'} />
            <RestaruntCard title={'Hotel Moon'} img={'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg'} />
            <RestaruntCard title={'KFC'} img={'https://www.poultrynews.co.uk/wp-content/uploads/2018/02/KFC-1.jpg'} />
            <RestaruntCard title={'Pizaa wala'} img={'https://img.thecdn.in/167599/1674571564966_SKU-1899_0.png?width=600'}/>
            </div>

            
    </div>
  )
}

export default Body
