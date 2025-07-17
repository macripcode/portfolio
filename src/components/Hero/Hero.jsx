import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "../../context/TranslationContext";

import Timeline from "./Timeline";

import "../../styles/hero/hero.css";

function Hero() {
  const translation = useTranslation();
  const hero = translation.hero;

  const greeting = hero.greeting;
  const title = hero.title;
  const text = hero.text;
  const downloadMyCv = hero.downloadMyCV;
  const contactMe = hero.contactMe;

  return (
    <section id="hero">

      <div className="hero-description-div">
        <div className="greeting-div">
          <h1>{greeting}</h1>
        </div>
        <div className="picture-div">
          <img src="/hero-square.png" alt="profile picture"></img>
        </div>
        <div
          className="description-div"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <div className="buttons-div">
          <a href="/files/cristina-portilla.pdf" download>
            <span>{downloadMyCv}</span>
          </a>
          <a href="mailto:macripco1311@gmail.com">
            <span>{contactMe}</span>
          </a>
        </div>
      </div>

      <Timeline></Timeline>
    </section>
  );
}
export default Hero;
