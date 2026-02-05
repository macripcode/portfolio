import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Settings from "./Settings";
import "../../styles/header/header.css";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleResize = (e) => {
      setMobile(e.matches);
      if (!e.matches) {
        setShowNav(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setShowNav(prev => !prev);
  };

  const headerClasses = [
    'header',
    mobile && !showNav && 'header-collapsed'
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
       <Logo mobile={mobile} showNav={showNav} onToggleNav={toggleNav} />
       {(!mobile || showNav) && <Navbar onClose={() => setShowNav(false)} />}
       {(!mobile || showNav) && <Settings />}
    </header>
  );
}

export default Header;