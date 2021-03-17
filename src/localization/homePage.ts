import { HomePageLocalization } from "../redux/localizationSlice";

const en: HomePageLocalization = {
  searchBtn: {
    text: "Go",
  },
  searchField: {
    placeholder: "Сountry search...",
  },
  appDescription:
    "TravelApp is an application for virtual travel around the world." +
    " For those who find it painful to be at home during the quarantine," +
    " our application comes, allowing you to virtually go to almost any place in the world.",
  appTitle: "Open your eyes to online travel",
  searchDescription: "Let's start! Where do you want to go?",
};
const ru: HomePageLocalization = {
  searchBtn: {
    text: "Вперед",
  },
  searchField: {
    placeholder: "Поиск страны...",
  },
  appDescription:
    "TravelApp - приложение для виртуального путешествия по миру." +
    " Для тех, кому больно находиться дома во время карантина, приходит наше приложение," +
    " позволяющее отправиться практически в любую точку мира.",
  appTitle: "Откройте глаза на онлайн-путешествия",
  searchDescription: "Давай начнем! Куда ты хочешь поехать?",
};
const de: HomePageLocalization = {
  searchBtn: {
    text: "Geh",
  },
  searchField: {
    placeholder: "Land suche...",
  },
  appDescription:
    "TravelApp ist eine Anwendung für virtuelles Reisen um die Welt." +
    " Für diejenigen, die es schmerzhaft finden, während der Quarantäne zu Hause zu sein," +
    " ist unsere Anwendung verfügbar, mit der Sie praktisch an fast jeden Ort der Welt gehen können.",
  appTitle: "Öffne deine Augen für Online-Reisen ",
  searchDescription: "Lasst uns beginnen! Wohin willst du gehen?",
};

export const homePage = { en, ru, de };
