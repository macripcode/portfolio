import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useTranslation } from "../context/TranslationContext";

import Timeline from "./Timeline";

import "../styles/hero.css";

function Hero() {

  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const translation = useTranslation();
  const hero = translation.Hero;

  const greeting = hero.Greeting;
  const title = hero.Title;
  const text = hero.Text;

  return (
    <section id="hero">
      <div className="hero-description-div">
        <div className="picture-div"></div>
        <div className="text-div">
          <div className="greeting-div">
            <h1>{greeting}</h1>
          </div>
          <div
            className="description-div"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </div>

      <div className="hero-experience-div">
        <Timeline></Timeline>
      </div>
    </section>
  );
}
export default Hero;
