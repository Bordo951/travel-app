import { HeaderLocalization } from "../redux/localizationSlice";

const en: HeaderLocalization = {
  login: "Log in",
  signup: "Sign Up",
  logout: "Log Out",
};
const ru: HeaderLocalization = {
  login: "Войти",
  signup: "Регистрация",
  logout: "Выйти",
};
const de: HeaderLocalization = {
  login: "Einloggen",
  signup: "Anmeldung",
  logout: "Ausloggen",
};

export const header = { en, ru, de };
