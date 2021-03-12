import { countryPage } from "../localization/countryPage";
import { homePage } from "../localization/homePage";
import { footer } from "../localization/footer";
import { header } from "../localization/header";
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

export type HomePageLocalization = {
  searchField: {
    placeholder: string;
  };
  searchBtn: {
    text: string;
  };
};

export type HeaderLocalization = {
  login: string;
  signup: string;
};

export type FooterLocalization = {
  app: {
    title: string;
    text: string;
  };
  team: {
    title: string;
    members: {
      vladislav: string;
      farrukh: string;
      irina: string;
      mahti: string;
    };
  };
  copyright: string;
};

export type LanguageType = "ru" | "en" | "de";

export type LocalizationState = {
  language: LanguageType;
  countryPage: CountryPageLocalization;
  homePage: HomePageLocalization;
  footer: FooterLocalization;
  header: HeaderLocalization;
};

//initial state
const initState: LocalizationState = {
  language: "en",
  countryPage: countryPage["en"],
  homePage: homePage["en"],
  footer: footer["en"],
  header: header["en"],
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
        homePage: homePage[action.payload],
        footer: footer[action.payload],
        header: header[action.payload],
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
export const getHomePageLocalization = (state: AppState) => state.localization.homePage;
export const getFooterLocalization = (state: AppState) => state.localization.footer;
export const getHeaderLocalization = (state: AppState) => state.localization.header;
