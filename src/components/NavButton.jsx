import TabContext from "../service/TabContext";

function NavButton({ id, btnName, handleChangeActiveTab }) {
  function handleClick(e) {
    const activeTabName = e.target.id;
    handleChangeActiveTab(activeTabName)
  }

  return (
    <TabContext.Consumer>
      {tabName => {
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
      }}
    </TabContext.Consumer>
  )
}

export default NavButton;