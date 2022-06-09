function TabNow({ city, handleLikeClick }) {

  function handleClick() {
    handleLikeClick(city)
  }

  return (
    <li className="weather__main-item weather__main-item--active ">
      <div
        className="common-info">

        <div
          className="common-info__temperature">
        </div>

        <div
          className="common-info__city">
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