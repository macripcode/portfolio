import React, { useState, useContext } from "react";

import Select from "react-select";

import { useCSSVariables } from "../hooks/useCSSVariables";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useTranslation } from "../context/TranslationContext";

import "../styles/header.css";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);

  const translation = useTranslation();

  const header = translation.header;
  const navbar = header.navbar;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showSidebar, setShowSidebar] = useState(true);

  const handleCloseSidebar = () => setShowSidebar(false);

  const {
    "--background": bgColor,
    "--background-logo": bgLogoColor,
    "--text": textColor,
    "--subtitle": subtitleColor,
    "--line": lineColor,
  } = useCSSVariables(
    ["--background", "--background-logo", "--text", "--subtitle", "--line"],
    "body",
    [theme]
  );

  const { "--font-heading": fontHeading } = useCSSVariables(
    ["--font-heading"],
    "root",
    [theme]
  );

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const options = [
    { value: "en", label: "🇺🇸 English" },
    { value: "es", label: "🇨🇴 Español" },
  ];

  return (
    <header className="header" style={{ backgroundColor: bgColor }}>
      <div className="desktop-navbar">
        <div className="div-logo">
          <div className="div-logo-wrapper">
            <img src="/logo-pattern.png" alt="logo" className="logo-img" />
          </div>
        </div>

        <div className="div-links">
          <nav>
            {navbar.map((label, index) => {
              const hrefs = ["#hero", "#experience", "#projects", "#languages"];
              return (
                <a key={index} href={hrefs[index]} style={{ margin: "0 1rem" }}>
                  {label}
                </a>
              );
            })}
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

          <div>
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
      </div>

      {showSidebar && (
        <aside className="mobile-sidebar">
          <button className="close-button" onClick={handleCloseSidebar}>
            ✖️
          </button>

          <div className="div-logo">
            <div className="div-logo-wrapper">
              <img src="/logo-pattern.png" alt="logo" className="logo-img" />
            </div>
          </div>

          <div className="div-links">
            <nav>
              {navbar.map((label, index) => {
                const hrefs = [
                  "#hero",
                  "#experience",
                  "#projects",
                  "#languages",
                ];
                return (
                  <a
                    key={index}
                    href={hrefs[index]}
                    style={{ margin: "0 1rem" }}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      )}
    </header>
  );
}

export default Header;
