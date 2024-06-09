import { createSlice } from "@reduxjs/toolkit";
import { getWeatherAsync } from "../Actions/WeatherAction";

const initialState = {
    weather: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}


// Create the weather slice
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false
            state.isLoading = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        //------ build case------------
        builder
            //get weather
            .addCase(getWeatherAsync.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getWeatherAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.weather = action.payload; 
              })
              .addCase(getWeatherAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
              })
    },
});

export const { reset } = weatherSlice.actions;
export default weatherSlice.reducer;