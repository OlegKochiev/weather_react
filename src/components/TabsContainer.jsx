import React from "react";

function TabsContainer() {
  return (
    <ul className="weather__main-list">
      <li className="weather__main-item weather__main-item--active ">
        <div className="common-info">
          <div className="common-info__temperature"></div>

          <div className="common-info__city"></div>

          <button className="common-info__favourite" type="button"></button>
        </div>
      </li>

      <li className="weather__main-item ">
        <div className="detailed-info">
          <div className="detailed-info__city"></div>
          <ul className="detailed-info__list">
            <li className="detailed-info__item detailed-info__item--temp"></li>
            <li className="detailed-info__item detailed-info__item--feels-like"></li>
            <li className="detailed-info__item detailed-info__item--weather"></li>
            <li className="detailed-info__item detailed-info__item--sunrise"></li>
            <li className="detailed-info__item detailed-info__item--sunset"></li>
          </ul>
        </div>

      </li>

      <li className="weather__main-item ">
        <div className="hour-info">
          <div className="hour-info__city"></div>

          <ul className="weather__main-hourly">
          </ul>
        </div>
      </li>
    </ul>
  )
}

export default TabsContainer;