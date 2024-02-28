import React from 'react';

function Header() {
  return (
    <div className='flex  justify-evenly pt-6 text-xl decoration-solid	h-[30%] border-b-2 border-indigo-500   '>
        <div className='w-20'>
          <img className='mb-2' src="https://img.freepik.com/free-vector/food-delivery-man-riding-motorcycles-cartoon-art-illustration_56104-610.jpg?size=626&ext=jpg&ga=GA1.1.114201948.1697225681&semt=ais" alt="" />
        </div>
        <div className='flex'>
          <ul className='flex space-x-7 mr-10 hover:cursor-pointer ' >
            <li className='hover:text-red-400'>Home</li>
            <li className='hover:text-red-400'> About</li>
            <li className='hover:text-red-400'>Contact</li>
          </ul>
        </div>
    </div>
  );
}
export default Header;
 