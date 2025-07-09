import { createContext, useContext } from "react";
import { translations } from "../components/translations"; // ajusta el path si es necesario
import { LanguageContext } from "./LanguageContext";

export const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const { lang } = useContext(LanguageContext);

  const t = translations[lang] || translations["en"]; // fallback por si acaso

  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
