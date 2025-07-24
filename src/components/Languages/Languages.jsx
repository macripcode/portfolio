import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "../../context/TranslationContext";

import DotsProgress from "../DotsProgress/DotsProgress";

import "../../styles/languages/languages.css";

function Languages() {
  const translation = useTranslation();
  const languages = translation.languages;

  const title = languages.title;
  const items = languages.items;

  return (
    <section id="languages">

      <div className="container-section">

        <div className="languages-div">

          <div className="title-section">
            <h2>{title}</h2>
          </div>

          <div className="languages-content">
            {items.map((language, index) => (
              <div className="language-content" key={language.name}>
                <div className="language-desc-div">
                  <span className="language-title">{language.name}</span>
                  <br />
                  <span className="language-level"> {language.level}</span>
                </div>
                <div className="language-dots-div">
                  <DotsProgress
                    maxNumberOfDots={6}
                    numberOfActiveDots={language.levelNumber}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
