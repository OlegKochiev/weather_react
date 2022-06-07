import React from "react";

function SearchForm() {
  return (
    <form
      className="weather__form weather-form"
      action="#">
      <label
        className="sr-only"
        htmlFor="weatherInput">
        weather  htmlForm input
      </label>

      <input
        className="weather-form__input"
        id="inputForm"
        type="text"
        name="weatherInput"
        placeholder="Input city..">
      </input>

      <button
        className="weather-form__btn"
        id="btnForm"
        type="button">
      </button>
    </form>
  )
}

export default SearchForm;