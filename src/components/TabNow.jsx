import {
  URLS
} from '../consts';

function TabNow({ isLiked, weatherNow, handleLikeClick }) {

  const ICON_URL = URLS.WEATHER_ICON + weatherNow.icon + '@4x.png';
  const activeClass = isLiked && "common-info__favourite--active";

  function handleClick() {
    handleLikeClick(weatherNow.city);
  }

  return (
    <li className="weather__main-item weather__main-item--active ">
      <div
        className="common-info"
        style={{ backgroundImage: `url('${ICON_URL}')` }}>
        <div
          className="common-info__temperature">
          {weatherNow.temperature}°
        </div>

        <div
          className="common-info__city">
          {weatherNow.city}
        </div>

        <button
          className={"common-info__favourite " + activeClass}
          type="button"
          onClick={handleClick}>
        </button>
      </div>
    </li>
  )
}

export default TabNow;