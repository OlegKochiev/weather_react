import { BTNS_NAME } from "../consts";
import NavButton from "./NavButton";

function NavContainer({ handleChangeActiveTab, tabName }) {
  return (
    <ul
      className="weather__nav">

      <NavButton
        id={"NOW"}
        tabName={tabName}
        btnName={BTNS_NAME.NOW}
        handleChangeActiveTab={handleChangeActiveTab}
      />

      <NavButton
        id={"DETAILS"}
        tabName={tabName}
        btnName={BTNS_NAME.DETAILS}
        handleChangeActiveTab={handleChangeActiveTab}
      />

      <NavButton
        id={"FORECAST"}
        tabName={tabName}
        btnName={BTNS_NAME.FORECAST}
        handleChangeActiveTab={handleChangeActiveTab}
      />
    </ul>
  )
}

export default NavContainer;