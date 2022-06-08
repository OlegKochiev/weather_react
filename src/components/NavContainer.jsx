import { BTNS_NAME } from "../consts";
import NavButton from "./NavButton";

function NavContainer() {
  return (
    <ul
      className="weather__nav">

      <NavButton
        btnName={BTNS_NAME.NOW}
      />

      <NavButton
        btnName={BTNS_NAME.DETAILS}
      />

      <NavButton
        btnName={BTNS_NAME.FORECAST}
      />
    </ul>
  )
}

export default NavContainer;