import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import "../../styles/header/settings.css";

/**
 * Settings component with theme and language toggles
 */
function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div className="div-settings">
      <button
        className="settings-btn gradient glow"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        {lang === "en" ? "🇨🇴" : "🇺🇸"}
      </button>

      <button
        className="settings-btn gradient glow"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default Settings;
