import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import faTranslation from "./locales/fa/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fa: {
        translation: faTranslation,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const setDocumentAttributes = (language: string) => {
  document.documentElement.lang = language;
  document.dir = language === "fa" ? "rtl" : "ltr";
};

setDocumentAttributes(i18n.language);
i18n.on("languageChanged", setDocumentAttributes);

export default i18n;
