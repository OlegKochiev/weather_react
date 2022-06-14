import {
  DEFAULT
} from "../consts";

import React, {
  useState,
  useEffect
} from "react";
import TabContext from "../service/TabContext";
import WeatherClass from "../WeatherClass";
import SearchForm from "./SearchForm";
import LocationList from "./LocationList";
import LocationTitle from "./LocationTitle";
import TabsContainer from "./TabsContainer";
import NavContainer from "./NavContainer";
import useWidth from "./hooks/useWidth";

const weatherAPI = new WeatherClass();


function Weather() {

  const [city, setCity] = useState(DEFAULT.CITY);
  const [weatherNow, setWeatherNow] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});
  const [tabName, setActiveTab] = useState(DEFAULT.TAB);
  const [likedCitys, setLikedCitys] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const screenWidth = useWidth();
  console.log(screenWidth);

  useEffect(() => {
    const firstRequest = async () => {
      const { weatherNow, weatherForecast } = await weatherAPI.doRequest(city);
      setWeatherNow(weatherNow);
      setWeatherForecast(weatherForecast);
    };
    firstRequest();
  }, [city]);

  function handleSearch(city) {
    setCity(city);
    const cityIsLiked = likedCitys.find((likedCity) => city === likedCity);
    setIsLiked(cityIsLiked || false);
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

        <TabContext.Provider value={tabName}>
          <TabsContainer
            isLiked={isLiked}
            weatherNow={weatherNow}
            weatherForecast={weatherForecast}
            handleLikeClick={handleLikeClick}
          />
        </TabContext.Provider>

        <LocationTitle />

        <LocationList
          likedCitys={likedCitys}
          handleSearch={handleSearch}
        />


        <TabContext.Provider value={tabName}>
          <NavContainer
            handleChangeActiveTab={handleChangeActiveTab}
          />
        </TabContext.Provider>
      </div>
    </div>
  )
}

export default Weather;