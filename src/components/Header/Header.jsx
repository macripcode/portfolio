import React, { useState, useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import { useCSSVariables } from "../../hooks/useCSSVariables";

import { ThemeContext } from "../../context/ThemeContext";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Settings from "./Settings";
import IconLogo from "./IconLogo";

import "../../styles/header/header.css";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [showSidebar, setShowSidebar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseSidebar = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowSidebar(false);
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
      <div className="desktop-navbar">
        <Logo></Logo>
        <Navbar></Navbar>
        <Settings></Settings>
      </div>

      {showSidebar && (
        <aside className={`mobile-sidebar ${isClosing ? "closing" : "active"}`}>
          <button className="close-button" onClick={handleCloseSidebar}>
            ✖️
          </button>
          <Logo></Logo>
          <Navbar onClose={handleCloseSidebar}></Navbar>

          <div className="bottom-bar">
            <Settings></Settings>
          </div>
        </aside>
      )}

      {!showSidebar && (
        <div className="menu-logo-wrapper">
          <IconLogo isClickable={true} onClick={() => setShowSidebar(true)} />
        </div>
      )}
    </header>
  );
}

export default Header;
