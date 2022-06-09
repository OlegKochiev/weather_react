import { URLS } from '../consts';

function TabNow({ weatherNow, handleLikeClick }) {

  const ICON_URL = URLS.WEATHER_ICON + weatherNow.icon;

  console.log(weatherNow);
  function handleClick() {
    handleLikeClick(weatherNow.city)
  }

  return (
    <li className="weather__main-item weather__main-item--active ">
      <div
        className="common-info"
        style={{ backgroundImage: `url('${ICON_URL}@4x.png')` }}>
        <div
          className="common-info__temperature">
          {weatherNow.temperature} °
        </div>

        <div
          className="common-info__city">
          {weatherNow.city}
        </div>

        <button
          className="common-info__favourite"
          type="button"
          onClick={handleClick}>
        </button>
      </div>
    </li>
  )
}

export default TabNow;