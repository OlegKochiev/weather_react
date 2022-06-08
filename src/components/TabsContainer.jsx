import React from "react";
import TabNow from "./TabNow";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecats";

function TabsContainer() {
  return (
    <ul className="weather__main-list">
      <TabNow />

      <TabDetails />

      <TabForecast />
    </ul>
  )
}

export default TabsContainer;