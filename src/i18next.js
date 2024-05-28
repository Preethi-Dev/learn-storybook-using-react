import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: "en",
    fallbackLng: "ar",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
