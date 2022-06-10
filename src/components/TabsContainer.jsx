import React from "react";
import TabNow from "./TabNow";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecats";

function TabsContainer({ tabName, isLiked, weatherNow, weatherForecast, handleLikeClick }) {
  const TABS = {
    NOW: (
      <TabNow
        isLiked={isLiked}
        weatherNow={weatherNow}
        handleLikeClick={handleLikeClick}
      />
    ),
    DETAILS: (
      <TabDetails
        weatherNow={weatherNow}
      />
    ),
    FORECAST: (
      <TabForecast
        weatherForecast={weatherForecast}
      />
    ),
  }

  const TAB = TABS[tabName];

  return (
    <ul className="weather__main-list">
      {TAB}
    </ul>
  )
}

export default TabsContainer;