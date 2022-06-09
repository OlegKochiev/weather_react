function TabForecast({ weatherForecast }) {
  return (
    <li className="weather__main-item ">
      <div
        className="hour-info">
        <div
          className="hour-info__city">
        </div>

        <ul
          className="weather__main-hourly">
        </ul>
      </div>
    </li>
  )
}

export default TabForecast;