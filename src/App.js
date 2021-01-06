import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles.css";
import { getWeatherByCoord, getDaysWeatherByCoord } from "./api";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDays from "./components/WeatherDays";

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

// create a promise to get geolocation
const getGeoLocation = () =>
  new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
      });
    } else {
      reject(new Error("location not supported"));
    }
  });

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherDays, setWeatherDays] = useState(null);

  // when the app first loads get weather by long lat
  useEffect(() => {
    // get geolocation
    getGeoLocation().then((res) => {
      const { longitude, latitude } = res.coords;
      // get weather by coord
      // get 5 days weather by coord
      Promise.all([
        getWeatherByCoord(longitude, latitude),
        getDaysWeatherByCoord(longitude, latitude, 7)
      ]).then((res) => {
        console.log(res);
        setCurrentWeather(res[0].data);
        setWeatherDays(res[1].data);
      });
    });
  }, []);

  return (
    <AppContainer>
      <CurrentWeather currentWeather={currentWeather} />
      <WeatherDays weatherDays={weatherDays} />
    </AppContainer>
  );
}
