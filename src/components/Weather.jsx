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





  const [tabName, setActiveTab] = useState(DEFAULT.TAB);
  const [likedCitys, setLikedCitys] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const screenWidth = useWidth();



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
        <SearchForm />

        <TabContext.Provider value={tabName}>
          <TabsContainer
            isLiked={isLiked}
            handleLikeClick={handleLikeClick}
          />
        </TabContext.Provider>

        <LocationTitle />

        <LocationList />


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