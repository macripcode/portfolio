import React, { useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "../../context/TranslationContext";

import Slider from "./Slider";

import "../../styles/work/work.css";

function Work() {
  const { lang } = useContext(LanguageContext);
  const translation = useTranslation();

  const work = translation.work;
  const title = work.title;
  const projects = work.projects;

  return (
    <section id="work">
      <div className="container-section">

        <div className="work-div">

          <div className="title-section title under-space-title">
            <h2>{title}</h2>
          </div>

          <Slider projects={projects} />

        </div>
        
      </div>
    </section>
  );
}
export default Work;
