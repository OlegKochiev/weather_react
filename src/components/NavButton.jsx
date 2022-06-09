function NavButton({ id, tabName, btnName, handleTab }) {
  function handleClick(e) {
    const id = e.target.id;
    handleTab(id)
  }

  const activeClass = (id === tabName) ? " weather__nav-btn--active" : "";
  const btnClass = "weather__nav-btn";

  return (
    <li className="weather__nav-item">
      <button
        className={btnClass + activeClass}
        id={id}
        type="button"
        onClick={handleClick}>
        {btnName}
      </button>
    </li>
  )
}

export default NavButton;