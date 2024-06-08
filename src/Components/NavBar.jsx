import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoSunnySharp } from 'react-icons/io5';
import foggi from '../assets/foggi.gif';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getWeatherAsync } from '../Redux/Actions/WeatherAction';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [location, setLocation] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const getWeather = (e) => {
    e.preventDefault();
    if (location.trim() === '') {
      toast.error('Please enter a valid location');
      return;
    }
    dispatch(getWeatherAsync({ location }));
    navigate('/');
  };

  return (
    <nav className={`w-full p-3 border-b-2 ${isDarkMode ? 'bg-cyan-900 text-cyan-200 border-cyan-200' : 'bg-blue-300 text-blue-900 border-blue-900'}`}>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex items-center mb-2 md:mb-0'>
          <img src={foggi} className='w-8 h-8 mr-2 md:w-10 md:h-10' alt="Weather Icon" />
          <span className='font-serif font-normal text-xs md:font-bold md:text-2xl'><Link to={'/'}>Weather App</Link></span>
        </div>
        <div className="flex items-center mb-2 md:mb-0">
        <input 
  type="text" 
  onChange={(e) => setLocation(e.target.value)} 
  className={`w-full md:min-w-[30vw] outline-none p-1 md:p-2 rounded-r-none rounded-sm border-2 border-r-0 ${isDarkMode ? 'bg-cyan-900 text-cyan-200 border-cyan-200' : 'bg-blue-300 text-blue-900 border-blue-900'}`} 
  placeholder='Enter the location..............' 
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      getWeather(e); // Passing the event to the getWeather function
    }
  }}
/>

          <button 
            onClick={getWeather} 
            className={`p-1 md:p-2 border-2 rounded-l-none rounded-sm border-l-0 ${isDarkMode ? 'bg-cyan-900 text-cyan-200 border-cyan-200' : 'bg-blue-300 text-blue-900 border-blue-900'}`}
          >
            <BiSearch size={24} />
          </button>
        </div>
        <button className='p-2 ml-0 md:ml-2' onClick={toggleTheme}>
          {isDarkMode ? <IoSunnySharp size={24} /> : <BsMoonStarsFill size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
