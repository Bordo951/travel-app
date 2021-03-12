import { AuthLocalization } from "../redux/localizationSlice";

const en: AuthLocalization = {
  signUp: "Sign Up",
  logIn: "Log In",
  logOut: "Log Out",
  inputs: {
    name: {
      text: "Name",
      placeholder: "Enter your name",
    },
    email: {
      text: "Email",
      placeholder: "Enter your email",
    },
    password: {
      text: "Password",
      placeholder: "Enter password",
    },
  },
  buttons: {
    logIn: "Log In",
    signUp: "Sign Up",
  },
};
const ru: AuthLocalization = {
  signUp: "Регистрация",
  logIn: "Войти",
  logOut: "Выйти",
  inputs: {
    name: {
      text: "Имя",
      placeholder: "Введите Ваше имя",
    },
    email: {
      text: "Email",
      placeholder: "Введите Ваш email",
    },
    password: {
      text: "Пароль",
      placeholder: "Введите пароль",
    },
  },
  buttons: {
    logIn: "Войти",
    signUp: "Зарегистрироваться",
  },
};
const de: AuthLocalization = {
  signUp: "Anmeldung",
  logIn: "Einloggen",
  logOut: "Ausloggen",
  inputs: {
    name: {
      text: "Name",
      placeholder: "Gib deinen Namen ein",
    },
    email: {
      text: "Email",
      placeholder: "Geben sie ihre E-Mail Adresse ein",
    },
    password: {
      text: "Passwort",
      placeholder: "Passwort eingeben",
    },
  },
  buttons: {
    logIn: "Einloggen",
    signUp: "Anmeldung",
  },
};

export const auth = { en, ru, de };
