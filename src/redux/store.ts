import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { CountriesActions, countriesReducer, CountriesState } from "./countriesSlice";
import { CountryActions, countryReducer, CountryState } from "./countrySlice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
});

export const store: Store<AppState, AppActions> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composedEnhancer);

export type AppState = {
  countries: CountriesState;
  country: CountryState;
};

export type AppActions = CountriesActions | CountryActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActions>;
