import React, { useState } from "react";

function SearchForm({ handleSearch }) {
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(city);
    clearInput();
  }

  function handleInputValueChange(e) {
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
      onSubmit={handleSubmit}>

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
        onChange={handleInputValueChange}>
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