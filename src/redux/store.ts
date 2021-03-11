import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { CountriesActions, countriesReducer, CountriesState } from "./countriesSlice";
import { CountryActions, countryReducer, CountryState } from "./countrySlice";
import { LocalizationActions, LocalizationReducer, LocalizationState } from "./localizationSlice";
import { WeatherActions, weatherReducer, WeatherState } from "./weatherSlice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  weather: weatherReducer,
  localization: LocalizationReducer,
});

export const store: Store<AppState, AppActions> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composedEnhancer);

export type AppState = {
  countries: CountriesState;
  country: CountryState;
  weather: WeatherState;
  localization: LocalizationState;
};

export type AppActions = CountriesActions | CountryActions | WeatherActions | LocalizationActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActions>;
