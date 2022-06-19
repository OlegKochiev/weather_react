import { useDispatch } from 'react-redux';
import { URLS } from '../consts';
import { addCityToFavourite, removeCityFromFavourite } from './redux/weatherSlice';
import { useSelector } from 'react-redux';


function TabNow({ isLiked, handleLikeClick }) {

  const weatherNow = useSelector((store) => store.weatherNow);
  console.log(weatherNow);


  const dispatch = useDispatch();

  const ICON_URL = URLS.WEATHER_ICON + weatherNow.icon + '@4x.png';
  const activeClass = isLiked && "common-info__favourite--active";

  function handleClick() {
    const city = weatherNow.city;
    handleLikeClick(city);
    if (isLiked) {
      dispatch(
        removeCityFromFavourite({
          city
        })
      );
    } else {
      dispatch(
        addCityToFavourite({
          city
        })
      )
    }
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