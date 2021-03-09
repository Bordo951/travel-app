import axios from "axios";
import { AppDispatch, AppState } from "./store";

//types
type CountryType = {
  id: string;
  name: string;
  capital: string;
  imageUrl: string;
};

type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export type CountriesState = {
  entities: CountryType[];
  searchQuery: string;
  status: RequestStatus;
  error: string;
};

//initial state
const initState: CountriesState = {
  entities: [],
  searchQuery: "",
  status: "idle",
  error: "",
};

// reducer
export const countriesReducer = (
  state: CountriesState = initState,
  action: CountriesActions
): CountriesState => {
  switch (action.type) {
    case "countries/setCountriesData":
      return {
        ...state,
        entities: action.payload,
        status: "succeeded",
        error: "",
      };
    case "countries/setRequestStatus":
      return { ...state, status: action.payload };
    case "countries/setErrorMessage":
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };
    case "countries/filterCountries":
      return {
        ...state,
        searchQuery: action.payload.toLowerCase(),
      };
    default:
      return state;
  }
};

//thunks
export const fetchCountriesData = () => async (dispatch: AppDispatch, getState: () => AppState) => {
  const url = "https://vhoreho-task-travel-app.herokuapp.com/countries";
  dispatch(setRequestStatus("loading"));
  try {
    const { data } = await axios.get<CountryType[]>(url);
    const countries = data.map((el) => ({
      id: el.id,
      name: el.name,
      capital: el.capital,
      imageUrl: el.imageUrl,
    }));
    dispatch(setCountriesData(countries));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

//actions
const setCountriesData = (entities: CountryType[]) =>
  ({ type: "countries/setCountriesData", payload: entities } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: "countries/setRequestStatus", payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: "countries/setErrorMessage", payload: message } as const);

export const filterCountries = (searchQuery: string) =>
  ({ type: "countries/filterCountries", payload: searchQuery } as const);

export type CountriesActions =
  | ReturnType<typeof setCountriesData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>
  | ReturnType<typeof filterCountries>;

//selectors
export const getFilteredCountries = (state: AppState) => {
  const searchQuery = state.countries.searchQuery;
  return state.countries.entities
    .filter(
      (el) =>
        el.capital.toLowerCase().includes(searchQuery) ||
        el.name.toLowerCase().includes(searchQuery)
    )
    .slice(0, 8);
};

export const getSearchQuery = (state: AppState) => state.countries.searchQuery;
export const getErrorMessage = (state: AppState) => state.countries.error;
export const getRequestStatus = (state: AppState) => state.countries.status;
