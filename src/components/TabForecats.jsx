import TabForecastItem from "./TabForecastItem";

function TabForecast({ weatherForecast }) {
  console.log(weatherForecast);
  const forecastList = weatherForecast.list.map((hourInfo, index) => {
    return (
      <TabForecastItem
        key={index}
        hourInfo={hourInfo}
      />
    )
  })
  return (
    <li className="weather__main-item ">
      <div
        className="hour-info">
        <div
          className="hour-info__city">
          {weatherForecast.city}
        </div>

        <ul
          className="weather__main-hourly">
          {forecastList}
        </ul>
      </div>
    </li>
  )
}

export default TabForecast;