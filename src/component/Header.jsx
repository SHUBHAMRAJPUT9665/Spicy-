import React from 'react';
import { LOGO_URL } from '../utils/constant';


const Header = () => {
  return (
    <div className='flex  justify-evenly pt-6 text-xl decoration-solid	h-[30%] border-b-2 border-indigo-500   '>
        <div className='w-20'>
          <img className='mb-2' src={ LOGO_URL} alt="" />
        </div>
        <div className='flex'>
          <ul className='flex space-x-7 mr-10 hover:cursor-pointer ' >
            <li className='hover:text-red-400'>Home</li>
            <li className='hover:text-red-400'> About</li>
            <li className='hover:text-red-400'>Contact</li>
            <li className='hover:text-red-400'>Log In</li>
          </ul>
        </div>
    </div>
  );
}
export default Header; 
 