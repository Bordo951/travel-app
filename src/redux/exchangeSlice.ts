import axios from "axios";
import { AppDispatch, AppState } from "./store";

//types
type ExchangeType = {
  countryCurrency: number;
  currencyInUSD: number;
  currencyInEUR: number;
  currencyInRUB: number;
};

type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export type ExchangeState = {
  entity: ExchangeType | null;
  status: RequestStatus;
  error: string;
};

//initial state
const initState: ExchangeState = {
  entity: null,
  status: "idle",
  error: "",
};

//reducer
export const exchangeReducer = (
  state: ExchangeState = initState,
  action: ExchangeActions
): ExchangeState => {
  switch (action.type) {
    case "exchange/setExchangeData":
      return {
        ...state,
        entity: action.payload,
        status: "succeeded",
        error: "",
      };
    case "exchange/setRequestStatus":
      return { ...state, status: action.payload };
    case "exchange/setErrorMessage":
      return {
        entity: null,
        status: "failed",
        error: action.payload,
      };
    default:
      return state;
  }
};
//thunk
export const fetchExchangeData = () => async (dispatch: AppDispatch, getState: () => AppState) => {
  const countryCurrency = getState().country.entity?.currency;
  if (countryCurrency === null) return;
  const apiKey = "1803a5ed454af65a9faa4cf6d9f9d5c7";
  const queryParams = {
    params: {
      access_key: apiKey,
      // symbols: "GBP,JPY,EUR",
    },
  };
  const url = `http://data.fixer.io/api/latest?`;
  dispatch(setRequestStatus("loading"));
  try {
    const { data } = await axios.get(url, queryParams);
    let countryCurrencyInEUR = 0;

    for (let item in data.rates) {
      if (item === countryCurrency) {
        countryCurrencyInEUR = 1 / data.rates[item];
      }
    }
    const exchange: ExchangeType = {
      countryCurrency: countryCurrencyInEUR,
      currencyInUSD: countryCurrencyInEUR * data.rates.USD,
      currencyInEUR: countryCurrencyInEUR * data.rates.EUR,
      currencyInRUB: countryCurrencyInEUR * data.rates.RUB,
    };
    dispatch(setExchangeData(exchange));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

//actions
const setExchangeData = (entity: ExchangeType) =>
  ({ type: "exchange/setExchangeData", payload: entity } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: "exchange/setRequestStatus", payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: "exchange/setErrorMessage", payload: message } as const);

export type ExchangeActions =
  | ReturnType<typeof setExchangeData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getErrorMessage = (state: AppState) => state.exchange.error;
export const getRequestStatus = (state: AppState) => state.exchange.status;
export const getExchangeData = (state: AppState) => state.exchange.entity;
export const getCurrency = (state: AppState) => state.country.entity?.currency;
