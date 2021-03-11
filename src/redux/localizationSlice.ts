import { countryPage } from "../localization/countryPage";
import { AppDispatch, AppState } from "./store";

//types
export type CountryPageLocalization = {
  tabs: {
    info: string;
    photo: string;
    video: string;
    map: string;
  };
  weather: {
    wind: string;
    windUnits: string;
  };
};

type LanguageType = "ru" | "en" | "de";

export type LocalizationState = {
  language: LanguageType;
  countryPage: CountryPageLocalization;
};

//initial state
const initState: LocalizationState = {
  language: "en",
  countryPage: countryPage["en"],
};

// reducer
export const LocalizationReducer = (
  state: LocalizationState = initState,
  action: LocalizationActions
): LocalizationState => {
  switch (action.type) {
    case "localization/changeLanguage":
      return {
        language: action.payload,
        countryPage: countryPage[action.payload],
      };
    default:
      return state;
  }
};

//thunks
export const setLanguage = (lang: LanguageType) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  dispatch(changeLanguage(lang));
  localStorage.setItem("TA-34-lang", lang);
};

//actions
const changeLanguage = (lang: LanguageType) =>
  ({ type: "localization/changeLanguage", payload: lang } as const);

export type LocalizationActions = ReturnType<typeof changeLanguage>;

//selectors
export const getLanguage = (state: AppState) => state.localization.language;
export const getCountryPageLocalization = (state: AppState) => state.localization.countryPage;
