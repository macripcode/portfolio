import { useTranslation } from "../../context/TranslationContext";

import "../../styles/hero/hero.css";

function Hero() {
  const translation = useTranslation();
  const hero = translation.hero;

  const title = hero.title;
  const text = hero.text;
  const viewProjects = hero.viewProjects;
  const contactMe = hero.contactMe;

  return (
    <section id="hero">
      <div className="container-section">
        <div className="hero-content">
          <div className="hero-text-column">
            <h1 className="hero-title">{title}</h1>
            <div
              className="hero-description"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="hero-buttons">
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
