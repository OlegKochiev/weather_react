import LocationItem from "./LocationItem";
import { useSelector } from 'react-redux'


function LocationList() {

  const favouriteCitys = useSelector(store => store.favouriteCitys)

  const locationList = favouriteCitys.map((city, index) => {
    return (
      <LocationItem
        key={index}
        city={city}
      />
    )
  });
  return (
    <ul className="weather__location-list">
      {locationList}
    </ul>
  )
}

export default LocationList;