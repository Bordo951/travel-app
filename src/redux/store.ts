import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AuthActions, authReducer, AuthState } from "./authSlice";
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
  auth: authReducer,
});

export const store: Store<AppState, AppActions> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composedEnhancer);

export type AppState = {
  countries: CountriesState;
  country: CountryState;
  weather: WeatherState;
  localization: LocalizationState;
  auth: AuthState;
};

export type AppActions =
  | CountriesActions
  | CountryActions
  | WeatherActions
  | LocalizationActions
  | AuthActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActions>;
