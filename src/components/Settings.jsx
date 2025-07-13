import React, { useState, useContext } from "react";

import Select from "react-select";

import { useCSSVariables } from "../hooks/useCSSVariables";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

import "../styles/settings.css";

function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const options = [
    { value: "en", label: "🇺🇸 English" },
    { value: "es", label: "🇨🇴 Español" },
  ];

  const {
    "--background": bgColor,
    "--background-logo": bgLogoColor,
    "--subtitle": subtitleColor,
    "--line": lineColor,
  } = useCSSVariables(
    ["--background", "--background-logo", "--subtitle", "--line"],
    "body",
    [theme]
  );

  const { "--font-heading": fontHeading } = useCSSVariables(
    ["--font-heading"],
    "root",
    [theme]
  );

  return (
    <div className="div-settings">
      <div className="div-settings-languages">
        <Select
          options={options}
          value={options.find((opt) => opt.value === lang)}
          onChange={(opt) => setLang(opt.value)}
          isSearchable={false}
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: 999,
              borderColor: lineColor,
              backgroundColor: bgLogoColor,
              color: bgColor,
              fontFamily: fontHeading,
              boxShadow: "none",
              padding: "2px",
            }),
            singleValue: (base) => ({
              ...base,
              color: bgColor,
              fontWeight: "bold",
              fontFamily: fontHeading,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected ? subtitleColor : bgColor,
              color: state.isSelected ? bgColor : subtitleColor,
              fontWeight: state.isSelected ? "bold" : "normal",
              fontFamily: fontHeading,
              cursor: "pointer",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: subtitleColor,
            }),
            indicatorSeparator: () => ({ display: "none" }),
            menu: (base) => ({
              ...base,
              backgroundColor: "transparent",
              fontFamily: fontHeading,
            }),
          }}
        />
      </div>

      <div className="div-settings-theme">
        <button
          className="theme-btn"
          onClick={toggleTheme}
          style={{
            padding: "0.3rem 0.8rem",
            borderRadius: "999px",
            border: `1px solid ${lineColor}`,
            backgroundColor: bgLogoColor,
            color: subtitleColor,
            fontFamily: fontHeading,
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}

export default Settings;
