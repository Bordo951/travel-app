import { HomePageLocalization } from "../redux/localizationSlice";

const en: HomePageLocalization = {
  searchBtn: {
    text: "Go",
  },
  searchField: {
    placeholder: "Сountry search...",
  },
};
const ru: HomePageLocalization = {
  searchBtn: {
    text: "Вперед",
  },
  searchField: {
    placeholder: "Поиск страны...",
  },
};
const de: HomePageLocalization = {
  searchBtn: {
    text: "Geh",
  },
  searchField: {
    placeholder: "Land suche...",
  },
};

export const homePage = { en, ru, de };
