import LocationItem from "./LocationItem";

function LocationList({ likedCitys, handleSearch }) {
  const locationList = likedCitys.map((city, index) => {
    return (
      <LocationItem
        key={index}
        city={city}
        handleSearch={handleSearch}
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