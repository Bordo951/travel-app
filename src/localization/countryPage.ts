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
    usd: "USD",
    eur: "EUR",
    rub: "RUB",
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
    usd: "Доллар США",
    eur: "Евро",
    rub: "Рубль",
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
    usd: "USD",
    eur: "EUR",
    rub: "RUB",
  },
};

export const countryPage = { en, ru, de };
