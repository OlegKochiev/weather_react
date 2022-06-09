import {
  REQUEST_TYPE,
  URLS,
  API_KEY,
  FORECAST_COUNT
} from "../consts";

class WeatherClass {

  constructor(city) {
    this.city = city;
  }

  async doRequest(city = this.city) {
    this.city = city;
    const [responseWeather, responseForecast] = await Promise.all([
      fetch(this.getURL(REQUEST_TYPE.WEATHER)),
      fetch(this.getURL(REQUEST_TYPE.FORECAST)),
    ])

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
      feels_like: Math.round(datas.main.feels_like - 273),
      weather: datas.weather[0].main,
      sunrise: datas.sys.sunrise,
      sunset: datas.sys.sunset,
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
    let url
    switch (requestType) {
      case REQUEST_TYPE.WEATHER:
        url = `${URLS.WEATHER}?q=${this.city}&appid=${API_KEY}`;
        break;
      case REQUEST_TYPE.FORECAST:
        url = `${URLS.FORECAST}?q=${this.city}&appid=${API_KEY}&units=metric&cnt=${FORECAST_COUNT}`;
        break;
    }
    return url;
  }
}

export default WeatherClass;