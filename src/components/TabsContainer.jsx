import React, { useContext } from "react";
import TabContext from "../service/TabContext";
import TabNow from "./TabNow";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecats";

function TabsContainer({ isLiked, weatherNow, weatherForecast, handleLikeClick }) {

  const setActiveTab = (tabName) => {

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

    return TAB;
  }


  return (
    <TabContext.Consumer>
      {tabName => (
        <ul className="weather__main-list">
          {setActiveTab(tabName)}
        </ul>
      )}
    </TabContext.Consumer>

  )
}

export default TabsContainer;