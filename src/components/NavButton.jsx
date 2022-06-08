function NavButton({ btnName }) {
  return (
    <li className="weather__nav-item">
      <button className="weather__nav-btn" id="btnForecast" type="button">
        {btnName}
      </button>
    </li>
  )
}

export default NavButton;