import { BTNS_NAME } from "../consts";
import NavButton from "./NavButton";

function NavContainer({ handleTab }) {
  return (
    <ul
      className="weather__nav">

      <NavButton
        handleTab={handleTab}
        btnName={BTNS_NAME.NOW}
        id={"NOW"}
      />

      <NavButton
        handleTab={handleTab}
        btnName={BTNS_NAME.DETAILS}
        id={"DETAILS"}
      />

      <NavButton
        handleTab={handleTab}
        btnName={BTNS_NAME.FORECAST}
        id={"FORECAST"}
      />
    </ul>
  )
}

export default NavContainer;