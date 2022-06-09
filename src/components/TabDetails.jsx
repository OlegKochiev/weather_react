function TabDetails({ weatherNow }) {
  const sunriseTime = (new Date(weatherNow.sunrise * 1000)).toLocaleTimeString().substring(0, 5);
  const sunsetTime = (new Date(weatherNow.sunset * 1000)).toLocaleTimeString().substring(0, 5);
  return (
    <li className="weather__main-item ">
      <div
        className="detailed-info">
        <div
          className="detailed-info__city">
          City: {weatherNow.city}
        </div>

        <ul
          className="detailed-info__list">
          <li
            className="detailed-info__item detailed-info__item--temp">
            Temperature: {weatherNow.temperature} °
          </li>

          <li
            className="detailed-info__item detailed-info__item--feels-like">
            Feels like: {weatherNow.feelsLike} °
          </li>

          <li
            className="detailed-info__item detailed-info__item--weather">
            Weather: {weatherNow.weather}
          </li>

          <li
            className="detailed-info__item detailed-info__item--sunrise">
            Sunrise: {sunriseTime}
          </li>

          <li
            className="detailed-info__item detailed-info__item--sunset">
            Sunset: {sunsetTime}
          </li>
        </ul>
      </div>
    </li>
  )
}

export default TabDetails;