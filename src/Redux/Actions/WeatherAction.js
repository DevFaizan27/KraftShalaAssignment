import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get weather data
export const getWeatherAsync = createAsyncThunk(
    'weather/getWeatherAsync',
    async ({ location }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}`,
                {
                    headers: {
                        'X-RapidAPI-Key': '49301d2a88mshe7b65f527437a25p184a9fjsn0f7d005f2590',
                        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                    },
                }
            );
            const data = response.data;
            return data;
        } catch (error) {
            // Check if error.response exists and handle the error
            if (error.response && error.response.data && error.response.data.error) {
              const errorMessage = error.response.data.error.code == '1003'
                ? false
                : error.response.data.error.message;
              throw rejectWithValue(errorMessage);
            } else {
              throw rejectWithValue('An unexpected error occurred');
            }
          }
    }
);
