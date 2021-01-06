import axios from "../axiosConfig";
import { OPEN_WEATHER_API_KEY } from "../openWeather";

// search by city name
export const getWeatherByCityName = (cityName, units = "metric") => {
  return axios.get(
    `weather?q=${cityName}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`
  );
};

export const getDaysWeatherByCityName = (
  cityName,
  units = "metric",
  days = 5
) => {
  return axios.get(
    `forecast/daily?q=${cityName}&cnt=${days}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`
  );
};

// search by coord
export const getWeatherByCoord = (lon, lat, units = "metric") => {
  return axios.get(
    `weather?lat=${lat}&lon=${lon}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`
  );
};

export const getDaysWeatherByCoord = (lon, lat, days = 5, units = "metric") => {
  return axios.get(
    `forecast/daily?lat=${lat}&lon=${lon}&cnt=${days}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`
  );
};
