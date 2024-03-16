import React from 'react';
import { LOGO_URL } from '../utils/constant';
import {useNavigate} from 'react-router-dom'
import { Link   } from 'react-router-dom';
import useOnlineStatus from './Hooks/useOnlineStatus';


const Header = () => {
  const navigate = useNavigate()

  const OnlineStauts = useOnlineStatus();
  return (
    <div className='flex  justify-around sm:justify-between items-center   text-md sm:text-xl  decoration-solid	h-[30%] border-b-2 border-indigo-500   '>
        <div className='w-14 mt-2 sm:mt-0 sm:w-20'>
          <img className='mb-2' src={ LOGO_URL} alt="" />
        </div>
        <div className='flex'>
          <ul className='flex gap-3 sm:space-x-7 sm:mr-10 hover:cursor-pointer ' >
            <li className='hover:text-red-400 text-green-600'>{OnlineStauts?<i class="ri-wifi-line"></i>:<i class="ri-wifi-off-line"></i>}</li>
            <li onClick={() => navigate('/')} className='hover:text-red-400'>Home</li>
            <li  onClick={() => navigate('/about')} className='hover:text-red-400'> About</li>
            <li onClick={() => navigate('/contact')} className='hover:text-red-400'>Contact</li>
            <li onClick={() => navigate('/login')} className='hover:text-red-400'>Log In</li>
          </ul>
        </div>
    </div>
  );
}
export default Header; 
 