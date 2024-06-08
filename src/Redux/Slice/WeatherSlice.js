import { createSlice } from "@reduxjs/toolkit";
import { getWeatherAsync } from "../Actions/WeatherAction";

const initialState = {
    weather: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}


// Create the product slice
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
        //------user end build case------------
        builder
            //get all proucts
            .addCase(getWeatherAsync.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getWeatherAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.weather = action.payload; // Assuming the API returns an array directly
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