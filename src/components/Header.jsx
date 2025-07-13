import React, { useState, useContext } from "react";

import { useCSSVariables } from "../hooks/useCSSVariables";

import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "../context/TranslationContext";

import Settings from "./Settings";

import "../styles/header.css";


function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const translation = useTranslation();

  const header = translation.header;
  const navbar = header.navbar;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showSidebar, setShowSidebar] = useState(true);

  const handleCloseSidebar = () => setShowSidebar(false);

  const { "--background": bgColor } = useCSSVariables(
    ["--background"],
    "body",
    [theme]
  );

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
                <a
                  key={index}
                  href={hrefs[index]}
                  style={{ margin: "0 1rem" }}
                  className="nav-links"
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>

        <Settings></Settings>
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
                  <div className="div-links-a-div">
                    <a
                      key={index}
                      href={hrefs[index]}
                      style={{ margin: "0 1rem" }}
                      className="nav-links"
                    >
                      {label}
                    </a>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="bottom-bar">
            <Settings></Settings>
          </div>
        </aside>
      )}
    </header>
  );
}

export default Header;
