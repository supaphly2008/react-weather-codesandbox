import React from "react";
import styled from "styled-components";
import { roundOffWeather } from "../util";

const CurrentWeatherContainer = styled.div`
  background-color: #33bad6;
  width: 100%;
  padding: 15px 0;
`;

const WeatherWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TemperatureWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TempH2 = styled.h2`
  font-size: 60px;
`;

const MinMaxTemp = styled.p`
  top: 12px;
  margin-left: 12px;
  position: relative;
`;

const CurrentWeather = (props) => {
  const { currentWeather } = props;
  console.log("current weather", currentWeather);
  return (
    <CurrentWeatherContainer>
      {currentWeather && (
        <WeatherWrapper>
          <IconWrapper>
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <p>{currentWeather.weather[0].main}</p>
          </IconWrapper>
          <TemperatureWrapper>
            <TempH2>
              {roundOffWeather(currentWeather.main.temp)}
              {"\u00b0"}
            </TempH2>
            <MinMaxTemp>
              {roundOffWeather(currentWeather.main.temp_max)}
              {"\u00b0"}/{roundOffWeather(currentWeather.main.temp_min)}
              {"\u00b0"}
            </MinMaxTemp>
          </TemperatureWrapper>
        </WeatherWrapper>
      )}
    </CurrentWeatherContainer>
  );
};

export default CurrentWeather;
