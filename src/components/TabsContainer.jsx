import React from "react";
import TabNow from "./TabNow";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecats";

function TabsContainer({ tabName }) {
  const TABS = {
    NOW: (<TabNow />),
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