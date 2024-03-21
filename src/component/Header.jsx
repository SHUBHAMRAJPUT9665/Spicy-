import React from 'react';
import { LOGO_URL } from '../utils/constant';
import {useNavigate} from 'react-router-dom'
import useOnlineStatus from './Hooks/useOnlineStatus';
import { useContext } from 'react';
import {UserContext} from  '../utils/UserContext'

const Header = () => {
  const navigate = useNavigate()

  const data = useContext(UserContext)


  const OnlineStauts = useOnlineStatus();
  return (
    <div className='flex bg-pink-100 p-3  justify-around sm:justify-between items-center   text-md sm:text-xl  decoration-solid	h-[30%] border-b-2 border-indigo-500   '>
        <div className='w-14 mt-2 sm:mt-0 sm:w-20'>
          <img className='mb-2 rounded-[100%]' src={ LOGO_URL} alt="" />
        </div>
        <div className='flex'>
          <ul className='flex gap-3 sm:space-x-7 sm:mr-10 hover:cursor-pointer ' >
            <li className='hover:text-red-400 text-green-600'>{OnlineStauts?<i className="ri-wifi-line"></i>:<i className="ri-wifi-off-line"></i>}</li>
            <li onClick={() => navigate('/')} className='hover:text-red-400'>Home</li>
            <li  onClick={() => navigate('/about')} className='hover:text-red-400'> About</li>
            <li onClick={() => navigate('/contact')} className='hover:text-red-400'>Contact</li>
            <li onClick={() => navigate('/login')} className='hover:text-red-400'>{data.loggedInUser}</li>
            <li  className='hover:text-red-400 w-10'><img className='rounded-full' src={data.image} alt="" /></li>

          </ul>
        </div>
    </div>
  );
}
export default Header; 
 