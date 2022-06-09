import {
  DEFAULT,
  REQUEST_TYPE,
  URLS,
  API_KEY,
  FORECAST_COUNT
} from "../consts";

import WeatherClass from "./WeatherClass";
import React, { useState } from "react";
import SearchForm from "./SearchForm";
import LocationList from "./LocationList";
import LocationTitle from "./LocationTitle";
import TabsContainer from "./TabsContainer";
import NavContainer from "./NavContainer";

const weatherAPI = new WeatherClass();

function Weather() {

  const [city, setCity] = useState(DEFAULT.CITY);
  const [weatherNow, setWeatherNow] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});
  const [tabName, setTabName] = useState(DEFAULT.TAB);
  const [likedCitys, setLikedCitys] = useState([]);

  async function handleSearch(city) {
    setCity(city);
    const { weatherNow, weatherForecast } = await weatherAPI.doRequest(city);
    setWeatherNow(weatherNow);
    setWeatherForecast(weatherForecast);
  }

  function handleTab(tabName) {
    setTabName(tabName);
  }

  function handleLikeClick(likedCity) {
    setLikedCitys([...likedCitys, likedCity]);
    console.log('Like is clicked!');
  }

  return (
    <div className="weather">
      <div className="weather__grid">

        <SearchForm
          handleSearch={handleSearch} />

        <TabsContainer
          tabName={tabName}
          weatherNow={weatherNow}
          weatherForecast={weatherForecast}
          handleLikeClick={handleLikeClick}
        />

        <LocationTitle />

        <LocationList />

        <NavContainer
          handleTab={handleTab}
        />


        {/*         <button className="weather__nav-btn weather__nav-btn--active" id="btnNow" type="button">Now</button>
        <button className="weather__nav-btn" id="btnDetails" type="button">Details</button>
        <button className="weather__nav-btn" id="btnForecast" type="button">Forecast</button>
 */}
      </div>
    </div>
  )
}
export default Weather;