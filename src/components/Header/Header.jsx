import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Settings from "./Settings";
import "../../styles/header/header.css";

/**
 * Header component with responsive navigation
 */
function Header() {
  const [showNav, setShowNav] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleResize = (e) => {
      setMobile(e.matches);
      // Reset showNav when switching to desktop
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

  return (
    <header className="header">
       <Logo mobile={mobile} showNav={showNav} onToggleNav={toggleNav} />
       {(!mobile || showNav) && <Navbar />}
       {(!mobile || showNav) && <Settings />}
    </header>
  );
}

export default Header;

/* si mobile==true y  showNav==true entonces el logo debe mostrar una X 
  si showNav==false y mobile==True entonces poner el div-links y div-settings con display none y el logo cuando haga hover mostrar el icono de menu
*/

