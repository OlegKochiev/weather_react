import React from "react";
import TabNow from "./TabNow";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecats";

function TabsContainer({ tabName, weatherNow, weatherForecast, handleLikeClick }) {
  const TABS = {
    NOW: (<TabNow
      weatherNow={weatherNow}
      handleLikeClick={handleLikeClick}
    />),
    DETAILS: (<TabDetails 
      weatherNow={weatherNow}
    />),
    FORECAST: (<TabForecast
      weatherForecast={weatherForecast}
    />),
  }

  const TAB = TABS[tabName];

  return (
    <ul className="weather__main-list">
      {TAB}
    </ul>
  )
}

export default TabsContainer;