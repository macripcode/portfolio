import { useTranslation } from "../../context/TranslationContext";

import "../../styles/header/navbar.css";

function Navbar({onClose}) {
  const translation = useTranslation();

  const header = translation.header;
  const navbar = header.navbar;

  return (
    <div className="div-links">
      <nav>
        {navbar.map((label, index) => {
          const hrefs = ["#hero", "#experience", "#work", "#languages"];
          return (
            <div key={index} className="div-links-a-div">
              <a
                key={index}
                href={hrefs[index]}
                style={{ margin: "0 1rem" }}
                className="nav-links glow-text"
                onClick={onClose}
              >
                {label}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
