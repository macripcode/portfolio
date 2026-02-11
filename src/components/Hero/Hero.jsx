import { useTranslation } from "../../context/TranslationContext";
import StarIcon from "@mui/icons-material/Star";
import Experience from "../Experience/Experience";

import "../../styles/hero/hero.css";

function Hero() {
  const translation = useTranslation();
  const hero = translation.hero;

  const greeting = hero.greeting;
  const title = hero.title;
  const text = hero.text;
  const viewProjects = hero.viewProjects;
  const contactMe = hero.contactMe;

  return (
    <section id="hero">
      <div className="container-section">
        <div className="hero-content">
          <div className="hero-text-column">
            <p className="hero-greeting subtitle-text">{greeting} 👋</p>
            <h1 className="hero-title title">{title}</h1>
            <ul className="hero-description common-text">
              {text.map((paragraph, index) => (
                <li key={index}>
                  <StarIcon className="hero-bullet-icon" />
                  <span>{paragraph}</span>
                </li>
              ))}
            </ul>
            <div className="hero-buttons common-text">
              <a href="#work" className="btn-projects glow">
                {viewProjects}
              </a>
              <a href="#contact" className="btn-contact glow">
                {contactMe}
              </a>
            </div>
          </div>
          <div className="hero-video-column">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/LwhOyvCft8A"
                title="Video de presentación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
