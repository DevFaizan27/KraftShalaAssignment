import React, { useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherAsync } from '../Redux/Actions/WeatherAction';
import Loader from './Loader';
import toast from 'react-hot-toast';
import { reset } from '../Redux/Slice/WeatherSlice';
import { Link } from 'react-router-dom';

const Card = () => {
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  const { weather, isSuccess, isLoading, isError, message } = useSelector((state) => state.weather);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess) {
      dispatch(reset());
    }
  }, [isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`w-80 h-auto p-4 rounded-md border-2 ${isDarkMode ? 'bg-cyan-900 text-cyan-200 border-cyan-200' : 'bg-blue-300 text-blue-900 border-blue-900'}`}>
      <div className={`flex flex-col items-center p-4 border-2 rounded-md ${isDarkMode ? 'border-cyan-200' : 'border-blue-900'}`}>
        <img className="w-20 h-20" src={weather?.current?.condition?.icon} alt="Weather Icon" />
        <h2 className="font-bold mt-2">{weather?.current?.condition?.text}</h2>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h2 className="font-bold text-lg">{weather?.current?.temp_c}°C / {weather?.current?.temp_f}°F</h2>
        <h2 className="font-bold mt-2">{weather?.location?.localtime}</h2>
        <h2 className="font-bold mt-2">{weather?.location?.name}, {weather?.location?.region} ({weather?.location?.country})</h2>
        <Link to="/forecast" className="mt-2 text-blue-500 hover:underline">Full Day Weather Forecast</Link>
      </div>
    </div>
  );
};

export default Card;
