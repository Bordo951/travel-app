import { FooterLocalization } from "../redux/localizationSlice";

const en: FooterLocalization = {
  app: {
    title: "About App",
    text:
      "TravelApp is an application for virtual travel around the world." +
      " For those who find it painful to be at home during the quarantine," +
      " our application comes, allowing you to virtually go to almost any place in the world.",
  },
  team: {
    title: "Our team",
    members: {
      farrukh: "Farrukh Khusanov",
      irina: "Irina Selivanova",
      vladislav: "Vladislav Horeh",
      mahti: "Mahti Shavaev",
    },
  },
  copyright: "All Rights Reserved",
};
const ru: FooterLocalization = {
  app: {
    title: "О приложении",
    text:
      "TravelApp - приложение для виртуального путешествия по миру." +
      " Для тех, кому больно находиться дома во время карантина, приходит наше приложение," +
      " позволяющее отправиться практически в любую точку мира.",
  },
  team: {
    title: "Наша команда",
    members: {
      farrukh: "Фаррух Хусанов",
      irina: "Ирина Селиванова",
      vladislav: "Vladislav Horeh",
      mahti: "Махти Шаваев",
    },
  },
  copyright: "Все права защищены",
};
const de: FooterLocalization = {
  app: {
    title: "Über App",
    text:
      "TravelApp ist eine Anwendung für virtuelles Reisen um die Welt." +
      " Für diejenigen, die es schmerzhaft finden, während der Quarantäne zu Hause zu sein," +
      " ist unsere Anwendung verfügbar, mit der Sie praktisch an fast jeden Ort der Welt gehen können.",
  },
  team: {
    title: "Unser Team",
    members: {
      farrukh: "Farrukh Khusanov",
      irina: "Irina Selivanova",
      vladislav: "Vladislav Horeh",
      mahti: "Mahti Shavaev",
    },
  },
  copyright: "Alle Rechte vorbehalten",
};

export const footer = { en, ru, de };
