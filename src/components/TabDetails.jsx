function TabDetails() {
  return (
    <li className="weather__main-item ">
      <div
        className="detailed-info">
        <div
          className="detailed-info__city">
        </div>

        <ul
          className="detailed-info__list">
          <li
            className="detailed-info__item detailed-info__item--temp">
          </li>

          <li
            className="detailed-info__item detailed-info__item--feels-like">
          </li>

          <li
            className="detailed-info__item detailed-info__item--weather">
          </li>

          <li
            className="detailed-info__item detailed-info__item--sunrise">
          </li>

          <li
            className="detailed-info__item detailed-info__item--sunset">
          </li>
        </ul>
      </div>
    </li>
  )
}

export default TabDetails;