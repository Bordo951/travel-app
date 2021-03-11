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
};

export const countryPage = { en, ru, de };
