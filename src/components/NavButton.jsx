function NavButton({ handleTab, btnName, id }) {
  function handleClick(e) {
    const id = e.target.id;
    handleTab(id)
  }
  return (
    <li className="weather__nav-item">
      <button
        className="weather__nav-btn"
        id={id}
        type="button"
        onClick={handleClick}>
        {btnName}
      </button>
    </li>
  )
}

export default NavButton;