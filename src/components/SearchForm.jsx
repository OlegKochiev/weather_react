import React, { useState } from "react";

function SearchForm({ handleSearch }) {
  const [city, setCity] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    handleSearch(city);
    clearInput();
  }

  function inputChangeHandler(e) {
    const inputValue = e.target.value;
    setCity(inputValue);
  }

  function clearInput() {
    setCity('');
  }
  return (
    <form
      className="weather__form weather-form"
      action="#"
      onSubmit={submitHandler}>

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
        placeholder="Input city.."
        value={city}
        onChange={inputChangeHandler}>
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