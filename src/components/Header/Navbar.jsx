import { useTranslation } from "../../context/TranslationContext";

import "../../styles/header/navbar.css";

function Navbar({ onClose }) {
  const translation = useTranslation();

  const header = translation.header;
  const navbar = header.navbar;

  return (
    <nav className="div-links">
      {navbar.map((label, index) => {
        const hrefs = ["#hero", "#experience", "#work", "#contact"];
        return (
          <div key={index} className="div-links-a-div">
            <a
              key={index}
              href={hrefs[index]}
              style={{ margin: "0 1rem" }}
              className="nav-links glow-text highlight"
              onClick={onClose}
            >
              {label}
            </a>
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
