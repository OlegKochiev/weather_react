import { createSlice } from "@reduxjs/toolkit";

const weatherReducer = createSlice({
  name: 'weather',
  initialState: {
    currentCity: '',
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
      const city = action.payload.city;
      state.currentCity = city;
    }
  }
});

export const {
  addCityToFavourite,
  removeCityFromFavourite,
  setCurrentCity
} = weatherReducer.actions;

export default weatherReducer.reducer;
