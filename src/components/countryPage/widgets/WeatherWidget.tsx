import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCapitalName } from "../../../redux/countrySlice";
import { getCountryPageLocalization } from "../../../redux/localizationSlice";
import {
  fetchWeatherData,
  getErrorMessage,
  getRequestStatus,
  getWeatherData,
} from "../../../redux/weatherSlice";

const Inner = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  background-color: #ffc343;
  padding: 15px;
  text-align: center;
  overflow: hidden;
  border-radius: 6px 6px 0 0;
`;

const Row = styled.div`
  display: flex;
`;

const WeatherIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const TempWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Temperature = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const Description = styled.p`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
`;
const Wind = styled.p`
  font-size: 12px;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 230px;
  font-size: 18px;
`;

const WeatherWidget: React.FC = () => {
  const capitalName = useSelector(getCapitalName);
  const weather = useSelector(getWeatherData);
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const localization = useSelector(getCountryPageLocalization);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch, capitalName]);

  return (
    <Inner>
      {status === "loading" && <Message>Loading...</Message>}
      {status === "failed" && <Message>{error}</Message>}
      {status === "succeeded" && weather !== null && (
        <>
          <Title>{capitalName}</Title>
          <Row>
            <WeatherIcon src={weather.iconUrl} alt="icon" />
            <TempWrapper>
              <Temperature>{weather.tempC}°C</Temperature>
              <Temperature>{weather.tempF}°F</Temperature>
            </TempWrapper>
          </Row>
          <Description>{weather.description}</Description>
          <Wind>
            {localization.weather.wind}: {weather.wind} {localization.weather.windUnits}
          </Wind>
        </>
      )}
    </Inner>
  );
};

export default WeatherWidget;
