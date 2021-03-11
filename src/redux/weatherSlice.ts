import axios from "axios";
import { AppDispatch, AppState } from "./store";

//types
type WeatherType = {
  iconUrl: string;
  tempC: number;
  tempF: number;
  description: string;
  wind: string;
  timezone: number;
};

type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export type WeatherState = {
  entity: WeatherType | null;
  status: RequestStatus;
  error: string;
};

//initial state
const initState: WeatherState = {
  entity: null,
  status: "idle",
  error: "",
};

// reducer
export const weatherReducer = (
  state: WeatherState = initState,
  action: WeatherActions
): WeatherState => {
  switch (action.type) {
    case "weather/setWeatherData":
      return {
        ...state,
        entity: action.payload,
        status: "succeeded",
        error: "",
      };
    case "weather/setRequestStatus":
      return { ...state, status: action.payload };
    case "weather/setErrorMessage":
      return {
        entity: null,
        status: "failed",
        error: action.payload,
      };
    default:
      return state;
  }
};

//thunks
export const fetchWeatherData = () => async (dispatch: AppDispatch, getState: () => AppState) => {
  const countryData = getState().country.entity;
  if (countryData === null) return;
  const apiKey = "7f078665db64dead6faecd3db1f4ad9a";
  const [lon, lat] = countryData.capitalCoordinates;
  const lang = getState().localization.language;
  const queryParams = {
    params: {
      lon,
      lat,
      units: "metric",
      lang: lang,
      appid: apiKey,
    },
  };
  const url = `https://api.openweathermap.org/data/2.5/weather`;
  dispatch(setRequestStatus("loading"));
  try {
    const { data } = await axios.get(url, queryParams);
    const weather: WeatherType = {
      iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      tempC: Math.round(Number(data.main.temp)),
      tempF: Math.round(Number(data.main.temp) * 1.8 + 32),
      description: data.weather[0].description,
      wind: data.wind.speed,
      timezone: Number(data.timezone),
    };
    dispatch(setWeatherData(weather));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

//actions
const setWeatherData = (entity: WeatherType) =>
  ({ type: "weather/setWeatherData", payload: entity } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: "weather/setRequestStatus", payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: "weather/setErrorMessage", payload: message } as const);

export type WeatherActions =
  | ReturnType<typeof setWeatherData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getErrorMessage = (state: AppState) => state.weather.error;
export const getRequestStatus = (state: AppState) => state.weather.status;
export const getWeatherData = (state: AppState) => state.weather.entity;
export const getTimezone = (state: AppState) => state.weather.entity?.timezone;
