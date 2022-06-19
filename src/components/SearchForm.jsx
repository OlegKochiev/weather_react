import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setCurrentCity } from "./redux/weatherSlice";
import WeatherClass from "../WeatherClass";
import Weather from "./Weather";

const weatherAPI = new WeatherClass();

function SearchForm() {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const weatherRequest = async () => {
      const { weatherNow, weatherForecast } = await weatherAPI.doRequest(city);
      dispatch(
        setCurrentCity({
          weatherNow: { ...weatherNow },
          weatherForecast: { ...weatherForecast }
        })
      )

    };
    weatherRequest();
  }, [city]);



  function handleSubmit(e) {
    e.preventDefault();
    setCity(inputValue);
    clearInput();
  }

  function handleInputValueChange(e) {
    const inputValue = e.target.value;
    setInputValue(inputValue);
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