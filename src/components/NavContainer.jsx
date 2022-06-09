import { BTNS_NAME } from "../consts";
import NavButton from "./NavButton";

function NavContainer({ handleTab, tabName }) {
  return (
    <ul
      className="weather__nav">

      <NavButton
        id={"NOW"}
        tabName={tabName}
        btnName={BTNS_NAME.NOW}
        handleTab={handleTab}
      />

      <NavButton
        id={"DETAILS"}
        tabName={tabName}
        btnName={BTNS_NAME.DETAILS}
        handleTab={handleTab}
      />

      <NavButton
        id={"FORECAST"}
        tabName={tabName}
        btnName={BTNS_NAME.FORECAST}
        handleTab={handleTab}
      />
    </ul>
  )
}

export default NavContainer;