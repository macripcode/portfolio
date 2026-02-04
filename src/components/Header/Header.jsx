import React, { useState, useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import { useCSSVariables } from "../../hooks/useCSSVariables";

import { ThemeContext } from "../../context/ThemeContext";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Settings from "./Settings";

import "../../styles/header/header.css";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [showNav, setShowNav] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseNav = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowNav(false);
      setIsClosing(false);
    }, 300);
  };

  const { "--background": bgColor } = useCSSVariables(
    ["--background"],
    "body",
    [theme]
  );

  return (
    <header className="header" style={{ backgroundColor: bgColor }}>
      {/* Botón de menú - solo visible en móvil */}
      <div className="menu-toggle">
        <Logo isClickable={true} onClick={() => setShowNav(true)} showMenuIcon={true} />
      </div>

      {/* Navbar única - responsive */}
      <nav className={`nav-container ${showNav ? 'show' : ''} ${isClosing ? 'closing' : ''}`}>
        <button className="close-button" onClick={handleCloseNav}>
          ✖️
        </button>

        <Logo />
        <Navbar onClose={handleCloseNav} />

        <div className="settings-wrapper">
          <Settings />
        </div>
      </nav>
    </header>
  );
}

export default Header;
