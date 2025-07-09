import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useTranslation } from "../context/TranslationContext";

import { translations } from "./translations";

import "../styles/hero.css";

import Timeline from "./Timeline";

function Hero() {

  
  const { Hero: heroText } = useTranslation();

  const { Greeting, Title, Text, Experience } = heroText;

  const { etitle, careerPath } = Experience;

  return (
    <section id="hero">
      <div className="hero-description-div">
        <div className="picture-div"></div>
        <div className="text-div">
          <div className="greeting-div">
            <h1>{Greeting}</h1>
          </div>
          <div
            className="description-div"
            dangerouslySetInnerHTML={{ __html: translations[lang].Hero.Text }}
          ></div>
        </div>
      </div>

      <div className="hero-experience-div">
        <h2>{etitle}</h2>
        <div className="timeline-div">
          <Timeline theme={theme} setTheme={setTheme} lang={lang}></Timeline>
        </div>
      </div>
    </section>
  );
}
export default Hero;
