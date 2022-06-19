import { createSlice } from "@reduxjs/toolkit";

const weatherReducer = createSlice({
  name: 'weather',
  initialState: {
    currentCity: {
      weather: {
        city: '',
        temperature: 0,
        feelsLike: 0,
        weather: '',
        sunrise: 0,
        sunset: 0,
        icon: '',
        isFavourite: false
      },
      forecast: []
    },
    favouriteCitys: []
  },
  reducers: {
    addCityToFavourite: function (state, action) {
      const city = action.payload.city;
      state.favouriteCitys.push(city)
    },
    removeCityFromFavourite: function (state, action) {
      const city = action.payload.city;
      state.favouriteCitys = state.favouriteCitys.filter(cityItem => cityItem !== city) ?? [];
    },
    setCurrentCity: function (state, action) {
      const { weatherNow, weatherForecast } = { ...action.payload };
      state.currentCity.weather = { ...weatherNow };
      state.currentCity.forecast = { ...weatherForecast }
    }
  }
});

export const {
  addCityToFavourite,
  removeCityFromFavourite,
  setCurrentCity
} = weatherReducer.actions;

export default weatherReducer.reducer;
