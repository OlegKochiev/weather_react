import { createSlice } from "@reduxjs/toolkit";

const weatherReducer = createSlice({
  name: 'weather',
  initialState: {
    favouriteCity: '',
    likedCitys: [],
  },
  reducers: {
    addCityToLiked: function (state, action) {
      console.log(action.payload);
    },
    removeCityFromLiked: function (state, action) {
      console.log(action.payload);
    },
    addCityToFavourite: function (state, action) {
      console.log(action.payload);
    },
    removeCityFromFavourite: function (state, action) {
      console.log(action.payload);
    },
  }
});

export const { addCityToLiked, addCityToFavourite, removeCityFromLiked, removeCityFromFavourite } = weatherReducer.actions;
export default weatherReducer.reducer;
