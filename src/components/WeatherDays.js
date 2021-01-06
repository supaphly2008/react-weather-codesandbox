import React from "react";
import styled from "styled-components";
import { getDayNames, roundOffWeather } from "../util";

const WeatherDaysContainer = styled.div`
  background-color: #33bad6;
  width: 100%;
  display: flex;
`;

const DayCardWrapper = styled.div`
  text-align: center;
  flex: 1 1 0;
  border-right: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 15px 0;
  &:last-child {
    border-right: none;
  }
`;

const DayName = styled.h3`
  font-size: 26px;
  font-weight: 100;
  text-transform: uppercase;
`;

const WeatherDays = (props) => {
  const { weatherDays } = props;
  // get array of weathers in days
  // loop through array and display
  console.log("weather days", weatherDays);
  return (
    <WeatherDaysContainer>
      {weatherDays &&
        weatherDays.list.map((day, index) => (
          <DayCardWrapper key={index}>
            <DayName>{getDayNames(day.dt)}</DayName>
            <img
              alt="icon"
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            />
            <p>
              {roundOffWeather(day.temp.max)}
              {"\u00b0"} / {roundOffWeather(day.temp.min)}
              {"\u00b0"}
            </p>
          </DayCardWrapper>
        ))}
    </WeatherDaysContainer>
  );
};

export default WeatherDays;
