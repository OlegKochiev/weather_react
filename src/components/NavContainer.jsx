import {
  BTNS_NAME
} from "../consts";


import NavButton from "./NavButton";

function NavContainer({ handleChangeActiveTab }) {
  return (
    <ul
      className="weather__nav">
      <NavButton
        id={"NOW"}
        btnName={BTNS_NAME.NOW}
        handleChangeActiveTab={handleChangeActiveTab}
      />

      <NavButton
        id={"DETAILS"}
        btnName={BTNS_NAME.DETAILS}
        handleChangeActiveTab={handleChangeActiveTab}
      />

      <NavButton
        id={"FORECAST"}
        btnName={BTNS_NAME.FORECAST}
        handleChangeActiveTab={handleChangeActiveTab}
      />
    </ul>
  )
}

export default NavContainer;