function LocationItem({ city, handleSearch }) {
  function handleClick() {
    handleSearch(city);
  }
  return (
    <li
      className="weather__location-item">

      <button
        className="weather__location-btn"
        type="button"
        onClick={handleClick}>
        {city}
      </button>
    </li>
  )
}

export default LocationItem;