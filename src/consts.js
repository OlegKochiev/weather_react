const BTNS_NAME = {
  FORECAST: "Forecast",
  NOW: "Now",
  DETAILS: "Details"
}

const REQUEST_TYPE = {
  WEATHER: 'weather',
  FORECAST: 'FORECAST'
}

const URLS = {
  WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
  FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
  WEATHER_ICON: 'http://openweathermap.org/img/wn/'
}

const DEFAULT = {
  CITY: "Vladikavkaz",
  TAB: "NOW"
}

const FORECAST_COUNT = 5;
const API_KEY = '3d8af9f7ae111ad0770a6a9d37546134';


export {
  BTNS_NAME,
  DEFAULT,
  URLS,
  REQUEST_TYPE,
  FORECAST_COUNT,
  API_KEY
}