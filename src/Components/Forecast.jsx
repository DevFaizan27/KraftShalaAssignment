import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';

const Forecast = () => {
    const { isDarkMode } = useTheme();
    const { weather } = useSelector((state) => state.weather);
    const currentDay = weather?.forecast?.forecastday[0];

    const navigate = useNavigate();

    useEffect(() => {
        if (currentDay === undefined) {
            navigate('/');
        }
    }, [currentDay, navigate]);

    if (currentDay === undefined) {
        return null; // Optionally, you can return a loading spinner or some other placeholder
    }

    return (
        <div className='flex flex-col md:flex-row max-w-full p-2'>
            {/* Current weather */}
            <div className={`w-80 h-auto p-4 rounded-b-none md:rounded-r-none rounded-md border-2 ${isDarkMode ? 'bg-cyan-900 text-cyan-200 border-cyan-200' : 'bg-blue-300 text-blue-900 border-blue-900'}`}>
                
                <div className={`flex flex-col items-center p-4 ${isDarkMode ? 'border-cyan-200' : 'border-blue-900'}`}>
                    <img className="w-20 h-20" src={currentDay?.day?.condition?.icon} alt="Weather Icon" />
                    <h2 className="font-bold mt-2">{currentDay?.day?.condition?.text}</h2>
                </div>
                <div className="mt-4 flex flex-col items-center">
                    <h2 className="font-semibold text-sm">Max Temp: {currentDay?.day?.maxtemp_c}°C / {currentDay?.day?.maxtemp_f}°F</h2>
                    <h2 className="font-semibold text-sm">Min Temp: {currentDay?.day?.mintemp_c}°C / {currentDay?.day?.mintemp_f}°F</h2>
                </div>
            </div>
            {/* Forecast weather */}
            <div className={`w-80 flex flex-row flex-wrap md:w-full rounded-t-none md:rounded-l-none rounded-md border-2 ${isDarkMode ? 'border-cyan-200' : 'border-blue-900'}`}>
                {currentDay?.hour?.map((e, index) => (
                    <div key={index} className="p-2 border-b-2 w-full md:w-1/4 lg:w-1/6">
                        <p><strong>Time:</strong> {e.time}</p>
                        <p><strong>Temp:</strong> {e.temp_c}°C</p>
                        <p><strong>Condition:</strong> {e.condition.text}</p>
                        <img src={e.condition.icon} alt={e.condition.text} className="w-10 h-10" />
                        <p><strong>Rain:</strong> {e.chance_of_rain}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
