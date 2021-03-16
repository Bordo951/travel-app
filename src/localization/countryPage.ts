import { CountryPageLocalization } from "../redux/localizationSlice";

const en: CountryPageLocalization = {
  tabs: {
    info: "Information",
    map: "Map",
    photo: "Photogallery",
    video: "Video",
  },
  weather: {
    wind: "Wind",
    windUnits: "m/s",
  },
  exchange: {
    USD: "USD",
    EUR: "EUR",
    RUB: "RUB",
    BYN: "BYN",
    UAH: "UAH",
    NOK: "NOK",
  },
};
const ru: CountryPageLocalization = {
  tabs: {
    info: "Информация",
    map: "Карта",
    photo: "Фотогалерея",
    video: "Видео",
  },
  weather: {
    wind: "Ветер",
    windUnits: "м/с",
  },
  exchange: {
    USD: "Доллар США",
    EUR: "Евро",
    RUB: "Рубль",
    BYN: "Белорусский рубль",
    UAH: "Гривна",
    NOK: "Крона",
  },
};
const de: CountryPageLocalization = {
  tabs: {
    info: "Information",
    map: "Karte",
    photo: "Fotogallerie",
    video: "Video",
  },
  weather: {
    wind: "Wind",
    windUnits: "m/s",
  },
  exchange: {
    USD: "USD",
    EUR: "EUR",
    RUB: "RUB",
    BYN: "BYN",
    UAH: "UAH",
    NOK: "NOK",
  },
};

export const countryPage = { en, ru, de };
