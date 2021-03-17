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
  places: {
    close: "Close",
    showVoters: "Show voters",
    voters: "Voters",
  },
  exchange: {
    USD: "USD",
    EUR: "EUR",
    RUB: "RUB",
    BYN: "BYN",
    UAH: "UAH",
    NOK: "NOK",
    GBP: "GBP",
    CZK: "CZK",
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
  places: {
    close: "Закрыть",
    showVoters: "Показать проголосовавших",
    voters: "Голосовавшие",
  },
  exchange: {
    USD: "Доллар США",
    EUR: "Евро",
    RUB: "Рубль",
    BYN: "Белорусский рубль",
    UAH: "Гривна",
    NOK: "Норвежская крона",
    GBP: "Фунт стерлингов",
    CZK: "Чешская крона",
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
  places: {
    close: "Schließen",
    showVoters: "Wähler zeigen",
    voters: "Wähler",
  },
  exchange: {
    USD: "USD",
    EUR: "EUR",
    RUB: "RUB",
    BYN: "BYN",
    UAH: "UAH",
    NOK: "NOK",
    GBP: "GBP",
    CZK: "CZK",
  },
};

export const countryPage = { en, ru, de };
