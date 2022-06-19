function LocationItem({ city }) {
  function handleClick() {
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