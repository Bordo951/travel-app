import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { CountriesActions, countriesReducer, CountriesState } from "./countriesSlice";
import { CountryActions, countryReducer, CountryState } from "./countrySlice";
import { WeatherActions, weatherReducer, WeatherState } from "./weatherSlice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  weather: weatherReducer,
});

export const store: Store<AppState, AppActions> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composedEnhancer);

export type AppState = {
  countries: CountriesState;
  country: CountryState;
  weather: WeatherState;
};

export type AppActions = CountriesActions | CountryActions | WeatherActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActions>;
