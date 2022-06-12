import {
  DEFAULT
} from "../consts";

import WeatherClass from "./WeatherClass";
import React from "react";
import {
  useState,
  useEffect
} from "react";
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
  const [tabName, setActiveTab] = useState(DEFAULT.TAB);
  const [likedCitys, setLikedCitys] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const firstRequest = async () => {
      const { weatherNow, weatherForecast } = await weatherAPI.doRequest(city);
      setWeatherNow(weatherNow);
      setWeatherForecast(weatherForecast);
    };
    firstRequest();
  }, [city])

  function handleSearch(city) {
    setCity(city);
    const cityIsLiked = likedCitys.find((likedCity) => city === likedCity);
    if (cityIsLiked) {
      setIsLiked(cityIsLiked);
    }
  }

  function handleChangeActiveTab(tabName) {
    setActiveTab(tabName);
  }

  function handleLikeClick(likedCity) {
    const isLiked = likedCitys.find((city) => city === likedCity);
    if (isLiked) {
      setLikedCitys([...likedCitys.filter((city) => city !== likedCity)]);
    };
    if (!isLiked) {
      setLikedCitys([...likedCitys, likedCity]);
    }
    setIsLiked(!isLiked);
  }

  return (
    <div className="weather">
      <div className="weather__grid">

        <SearchForm
          handleSearch={handleSearch} />

        <TabsContainer
          tabName={tabName}
          isLiked={isLiked}
          weatherNow={weatherNow}
          weatherForecast={weatherForecast}
          handleLikeClick={handleLikeClick}
        />

        <LocationTitle />

        <LocationList
          likedCitys={likedCitys}
          handleSearch={handleSearch}
        />

        <NavContainer
          tabName={tabName}
          handleChangeActiveTab={handleChangeActiveTab}
        />

      </div>
    </div>
  )
}

export default Weather;