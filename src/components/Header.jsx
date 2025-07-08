import "../styles/header.css";

import { useCSSVariables } from "../hooks/useCSSVariables";

import { useEffect, useState } from "react";

import React from "react";
import Select from "react-select";

function Header({ theme, setTheme, lang, setLang }) {
  const { 
    "--background":      bgColor,
    "--background-logo": bgLogoColor, 
    "--text":            textColor,
    "--subtitle":        subtitleColor, 
    "--line":            lineColor
   } = 
    useCSSVariables([  
      "--background", 
      "--background-logo",
      "--text",
      "--subtitle",
      "--line"  
    ], "body", [theme]);

    const {
      "--font-heading": fontHeading
    } = useCSSVariables([  
      "--font-heading"
    ], "root", [theme]);

  // Change lang
  function handleLangChange(selectedOption) {
    setLang(selectedOption.value);
  }

  // Change Theme
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const options = [
    { value: "en", label: "🇺🇸 English" },
    { value: "es", label: "🇨🇴 Español" },
  ];

  console.log("subtitleColor", subtitleColor)
  console.log("theme", theme)

  return (
    <header
      className="header"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="div-logo"
        style={{ backgroundColor: bgLogoColor }}
      ></div>

      <div>
        <nav>
          <a href="#hero" style={{ margin: "0 1rem" }}>
            About Me
          </a>
          <a href="#projects" style={{ margin: "0 1rem" }}>
            Work
          </a>
          <a href="#contact" style={{ margin: "0 1rem" }}>
            Contact
          </a>
        </nav>
      </div>

      <div className="div-settings">
        <div>
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
                backgroundColor: state.isSelected
                  ? subtitleColor
                  :  bgColor,
                color: state.isSelected
                  ? bgColor
                  : subtitleColor,
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
                fontFamily: fontHeading               
              }),
            }}
          />
        </div>

        <div>
          <button
            className="theme-btn"
            onClick={toggleTheme}
            style={{
              padding: "0.3rem 0.8rem",
              borderRadius: "999px",
              border: `1px solid ${lineColor}` ,
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
    </header>
  );
}

export default Header;
