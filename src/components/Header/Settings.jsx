import React, { useContext } from "react";

import { useCSSVariables } from "../../hooks/useCSSVariables";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

import "../../styles/header/settings.css";


function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const {
    "--background-logo": bgLogoColor,
    "--subtitle": subtitleColor,
    "--line": lineColor,
  } = useCSSVariables(
    ["--background-logo", "--subtitle", "--line"],
    "body",
    [theme]
  );

  const { "--font-heading": fontHeading } = useCSSVariables(
    ["--font-heading"],
    "root",
    [theme]
  );

  function toggleLanguage() {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  }

  return (
    <div className="div-settings">
      <div className="div-settings-language-toggle">
        <button
          className="language-btn"
          onClick={toggleLanguage}
          style={{
            padding: "0.5rem",
            borderRadius: "50%",
            border: `1px solid ${lineColor}`,
            backgroundColor: bgLogoColor,
            color: subtitleColor,
            fontFamily: fontHeading,
            fontWeight: "bold",
            fontSize: "1.2rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {lang === "en" ? "🇨🇴" : "🇺🇸"}
        </button>
      </div>

      <div className="div-settings-theme">
        <button
          className="theme-btn"
          onClick={toggleTheme}
          style={{
            padding: "0.5rem",
            borderRadius: "50%",
            border: `1px solid ${lineColor}`,
            backgroundColor: bgLogoColor,
            color: subtitleColor,
            fontFamily: fontHeading,
            fontWeight: "bold",
            fontSize: "1.2rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}

export default Settings;
