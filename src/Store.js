import { configureStore } from '@reduxjs/toolkit';
import WeatherSlice from './Redux/Slice/WeatherSlice';

const Store = configureStore({
  reducer: {
    weather:WeatherSlice,
    // Add other reducers here if needed
  },
});

export default Store;