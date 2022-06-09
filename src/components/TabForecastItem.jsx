import {
  URLS
} from "../consts";

function TabForecastItem({ hourInfo }) {
  const ICON_URL = URLS.WEATHER_ICON + hourInfo.icon + '@4x.png';
  return (
    <li className="hour-info__item">
      <div className="hour-info__date">
        <div className="hour-info__day">
          {hourInfo.date}
        </div>
        <div className="hour-info__time">
          {hourInfo.time}
        </div>
      </div>
      <div className="hour-info__weather">
        <div className="hour-info__temperature">
          Temperature: {hourInfo.temperature}°
        </div>
        <div className="hour-info__feel">
          Feels like: {hourInfo.feelsLike}°
        </div>
      </div>
      <div className="hour-info__icon">
        {hourInfo.weather}
        <span style={{ backgroundImage: `url('${ICON_URL}')` }}>

        </span>
      </div>
    </li>
  )
}

export default TabForecastItem;