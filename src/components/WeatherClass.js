import {
  REQUEST_TYPE,
  URLS,
  API_KEY,
  FORECAST_COUNT,
  DEFAULT
} from "../consts";

class WeatherClass {

  constructor(city = DEFAULT.CITY) {
    this.city = city;
  }

  async doRequest(city) {
    this.city = city ?? DEFAULT.CITY;
    const [responseWeather, responseForecast] = await Promise.all([
      fetch(this.getURL(REQUEST_TYPE.WEATHER)),
      fetch(this.getURL(REQUEST_TYPE.FORECAST)),
    ]);

    const responseWeatherDatas = await responseWeather.json();
    const responseForecastDatas = await responseForecast.json();

    const weatherNow = await this.extractWeatherDatas(responseWeatherDatas);
    const weatherForecast = await this.extractForecastDatas(responseForecastDatas);

    return { weatherNow, weatherForecast };
  }

  async extractWeatherDatas(datas) {
    return {
      city: datas.name,
      temperature: Math.round(datas.main.temp - 273),
      feelsLike: Math.round(datas.main.feels_like - 273),
      weather: datas.weather[0].main,
      sunrise: (new Date(datas.sys.sunrise * 1000)).toLocaleTimeString().substring(0, 5),
      sunset: (new Date(datas.sys.sunset * 1000)).toLocaleTimeString().substring(0, 5),
      icon: datas.weather[0].icon,
      isFavourite: false
    }
  }

  async extractForecastDatas(datas) {
    let forecastList = datas.list.map((item) => {
      return {
        date: (new Date(item.dt * 1000)).toString().substring(4, 11),
        time: (new Date(item.dt * 1000)).toLocaleTimeString().substring(0, 5),
        temperature: item.main.temp,
        feelsLike: item.main.feels_like,
        weather: item.weather[0].main,
        icon: item.weather[0].icon
      }
    });
    return {
      city: datas.city.name,
      list: forecastList
    }
  }

  getURL(requestType) {
    let URL = {
      [REQUEST_TYPE.WEATHER]: `${URLS.WEATHER}?q=${this.city}&appid=${API_KEY}`,
      [REQUEST_TYPE.FORECAST]: `${URLS.FORECAST}?q=${this.city}&appid=${API_KEY}&units=metric&cnt=${FORECAST_COUNT}`
    };
    return URL[requestType];
  }
}

export default WeatherClass;