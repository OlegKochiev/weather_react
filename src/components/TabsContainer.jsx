import React from "react";
import TabNow from "./TabNow";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecats";

function TabsContainer({ tabName, handleLikeClick }) {
  const TABS = {
    NOW: (<TabNow handleLikeClick={handleLikeClick} />),
    DETAILS: (<TabDetails />),
    FORECAST: (<TabForecast />),
  }

  const TAB = TABS[tabName];

  return (
    <ul className="weather__main-list">
      {TAB}
    </ul>
  )
}

export default TabsContainer;