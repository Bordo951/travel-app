import { HeaderLocalization } from "../redux/localizationSlice";

const en: HeaderLocalization = {
  login: "Log in",
  signup: "Sign Up",
};
const ru: HeaderLocalization = {
  login: "Войти",
  signup: "Регистрация",
};
const de: HeaderLocalization = {
  login: "Einloggen",
  signup: "Anmeldung",
};

export const header = { en, ru, de };
