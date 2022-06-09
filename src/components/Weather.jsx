import { BTNS_NAME, DEFAULT } from "../consts";
import React, { useState } from "react";
import SearchForm from "./SearchForm";
import LocationList from "./LocationList";
import LocationTitle from "./LocationTitle";
import TabsContainer from "./TabsContainer";
import NavContainer from "./NavContainer";

function Weather() {

  const [city, setCity] = useState(DEFAULT.CITY);
  const [tabName, setTabName] = useState(DEFAULT.TAB);
  const [likedCitys, setLikedCitys] = useState([]);

  function handleSearch(city) {
    setCity(city);
  }

  function handleTab(tabName) {
    setTabName(tabName);
  }

  function handleLikeClick(likedCity) {
    setLikedCitys([...likedCitys, likedCity]);
    console.log('Like is clicked!');
  }

  function requestWeather() {

  }

  function requestForecast() {

  }


  return (
    <div className="weather">
      <div className="weather__grid">

        <SearchForm
          handleSearch={handleSearch} />

        <TabsContainer
          tabName={tabName}
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