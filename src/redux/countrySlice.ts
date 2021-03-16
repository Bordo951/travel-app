import axios from "axios";
import { AppDispatch, AppState } from "./store";

//types
type PlaceType = {
  name: string;
  description: string;
  photoUrl: string;
};

type CountryType = {
  id: string;
  name: string;
  description: string;
  capital: string;
  imageUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  capitalCoordinates: number[];
  places: PlaceType[];
};

type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export type CountryState = {
  entity: CountryType | null;
  status: RequestStatus;
  error: string;
};

//initial state
const initState: CountryState = {
  entity: null,
  status: "idle",
  error: "",
};

// reducer
export const countryReducer = (
  state: CountryState = initState,
  action: CountryActions
): CountryState => {
  switch (action.type) {
    case "country/setCountryData":
      return {
        ...state,
        entity: action.payload,
        status: "succeeded",
        error: "",
      };
    case "country/setRequestStatus":
      return { ...state, status: action.payload };
    case "country/setErrorMessage":
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
export const fetchCountryData = (id: string) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = `https://vhoreho-task-travel-app.herokuapp.com/countries/${id}`;
  const lang = getState().localization.language;
  const queryParams = {
    params: {
      lang,
    },
  };
  dispatch(setRequestStatus("loading"));
  try {
    const { data } = await axios.get(url, queryParams);
    console.log(data);
    const country: CountryType = {
      id: data.id,
      name: data.name,
      description: data.description,
      capital: data.capital,
      imageUrl: data.imageUrl,
      videoUrl: data.videoUrl,
      currency: data.currency,
      ISOCode: data.ISOCode,
      capitalCoordinates: data.capitalLocation.coordinates,
      places: data.places,
    };
    dispatch(setCountryData(country));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

//actions
const setCountryData = (entity: CountryType) =>
  ({ type: "country/setCountryData", payload: entity } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: "country/setRequestStatus", payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: "country/setErrorMessage", payload: message } as const);

export type CountryActions =
  | ReturnType<typeof setCountryData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getErrorMessage = (state: AppState) => state.country.error;
export const getRequestStatus = (state: AppState) => state.country.status;
export const getCountryName = (state: AppState) => state.country.entity?.name;
export const getCapitalName = (state: AppState) => state.country.entity?.capital;
export const getCountryInfo = (state: AppState) => state.country.entity?.description;
export const getImageUrl = (state: AppState) => state.country.entity?.imageUrl;
export const getvideoUrl = (state: AppState) => state.country.entity?.videoUrl;
export const getCapitalCoordinates = (state: AppState) => state.country.entity?.capitalCoordinates;
export const getIsoCode = (state: AppState) => state.country.entity?.ISOCode;
export const getPlaces = (state: AppState) => state.country.entity?.places;
