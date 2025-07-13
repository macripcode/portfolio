import React, { useState, useContext } from "react";


import { useCSSVariables } from "../../hooks/useCSSVariables";

import { ThemeContext } from "../../context/ThemeContext";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Settings from "./Settings";

import "../../styles/header/header.css";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

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
        <Logo></Logo>
        <Navbar></Navbar>
        <Settings></Settings>
      </div>

      {showSidebar && (
        <aside className="mobile-sidebar">
          <button className="close-button" onClick={handleCloseSidebar}>
            ✖️
          </button>

          <Logo></Logo>
          <Navbar></Navbar>

          <div className="bottom-bar">
            <Settings></Settings>
          </div>
        </aside>
      )}
    </header>
  );
}

export default Header;
