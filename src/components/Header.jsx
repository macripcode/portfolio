import "../styles/header.css";

import { useCSSVariables } from "../hooks/useCSSVariables";

import { useEffect, useState } from "react";

import React from "react";
import Select from "react-select";

function Header({ theme, setTheme, lang, setLang }) {
  const { "--background": bgColor, "--text": textColor } = 
    useCSSVariables([  "--background", "--text", ]);

  // Cambiar idioma
  function handleLangChange(selectedOption) {
    setLang(selectedOption.value);
  }

  // Cambiar tema
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const options = [
    { value: "en", label: "🇺🇸 English" },
    { value: "es", label: "🇨🇴 Español" },
  ];

  return (
    <header
      className="header"
      style={{
        backgroundColor: theme === "dark" ? "#121212" : "#f0f0f0",
        color: theme === "dark" ? "#f0f0f0" : "#121212",
      }}
    >
      <div
        className="div-logo"
        style={{ backgroundColor: theme === "dark" ? "#333333" : "#e0e0e0" }}
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
                borderColor: "#f4b400",
                backgroundColor: "transparent",
                color: theme === "dark" ? "#f4b400" : "#121212",
                fontFamily: "'Julius Sans One', sans-serif",
                boxShadow: "none",
                padding: "2px",
              }),
              singleValue: (base) => ({
                ...base,
                color: theme === "dark" ? "#f4b400" : "#121212",
                fontWeight: "bold",
                fontFamily: "'Julius Sans One', sans-serif",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected
                  ? theme === "dark"
                    ? "#333333"
                    : "#e0e0e0"
                  : "transparent",
                color: state.isSelected
                  ? theme === "dark"
                    ? "#f4b400"
                    : "#121212"
                  : theme === "dark"
                  ? "#f0f0f0"
                  : "#121212",
                fontWeight: state.isSelected ? "bold" : "normal",
                fontFamily: "'Julius Sans One', sans-serif",
                cursor: "pointer",
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: theme === "dark" ? "#f4b400" : "#121212",
              }),
              indicatorSeparator: () => ({ display: "none" }),
              menu: (base) => ({
                ...base,
                backgroundColor: theme === "dark" ? "#121212" : "#ffffff",
                fontFamily: "'Julius Sans One', sans-serif",
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
              border: "1px solid #f4b400", // 🟡 borde dorado
              backgroundColor: theme === "dark" ? "#333333" : "#e0e0e0",
              color: theme === "dark" ? "#f4b400" : "#121212",
              fontFamily: "'Julius Sans One', sans-serif",
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
