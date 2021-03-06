import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { CountriesActions, countriesReducer, CountriesState } from "./countriesSlice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export const store: Store<AppState, AppActions> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composedEnhancer);

export type AppState = {
  countries: CountriesState;
};

export type AppActions = CountriesActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActions>;
