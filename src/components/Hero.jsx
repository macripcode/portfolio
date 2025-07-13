import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useTranslation } from "../context/TranslationContext";

import Timeline from "./Timeline";

import "../styles/hero.css";

function Hero() {

  const translation = useTranslation();
  const hero = translation.Hero;

  const greeting = hero.Greeting;
  const title = hero.Title;
  const text = hero.Text;
  const downloadMyCv = hero.DownloadMyCV;
  const contactMe = hero.ContactMe;



  return (
    <section id="hero">
      <div className="hero-description-div">
        <div className="hero-description-content">
          <div className="text-div">
            <div className="greeting-div">
              <h1>{greeting}</h1>
            </div>
            <div
              className="description-div"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
          <div className="picture-div">
            <img src="/hero-square.jpeg" alt="profile picture"></img>
          </div>
        </div>
        <div className="hero-description-buttons">
          <div className="div-buttons">
            <a href="/files/cristina-portilla.pdf" download>
              <span>{downloadMyCv}</span>
            </a>
            <a href="mailto:macripco1311@gmail.com">
              <span>{contactMe}</span>
            </a>
          </div>
        </div>
      </div>

      <Timeline></Timeline>
    </section>
  );
}
export default Hero;
