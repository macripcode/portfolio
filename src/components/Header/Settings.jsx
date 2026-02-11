import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import "../../styles/header/settings.css";

/**
 * Settings component with theme and language toggles
 */
function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);
  const [themeAnimating, setThemeAnimating] = useState(false);
  const [langAnimating, setLangAnimating] = useState(false);

  const toggleTheme = () => {
    setThemeAnimating(true);
    setTimeout(() => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      setTimeout(() => setThemeAnimating(false), 600);
    }, 300);
  };

  const toggleLanguage = () => {
    setLangAnimating(true);
    setTimeout(() => {
      setLang((prev) => (prev === "en" ? "es" : "en"));
      setTimeout(() => setLangAnimating(false), 600);
    }, 300);
  };

  return (
    <div className="div-settings">
      <button
        className={`settings-btn gradient glow ${langAnimating ? "settings-btn--spin" : ""}`}
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        <span className={`settings-icon ${langAnimating ? "settings-icon--fade" : ""}`}>
          {lang === "en" ? "🇨🇴" : "🇺🇸"}
        </span>
      </button>

      <button
        className={`settings-btn gradient glow ${themeAnimating ? "settings-btn--spin" : ""}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <span className={`settings-icon ${themeAnimating ? "settings-icon--fade" : ""}`}>
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </button>
    </div>
  );
}

export default Settings;
