import React, { useRef, useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "../../context/TranslationContext";

import ProjectCard from "./ProjectCard";

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

          <div className="title-section">
            <h2>{title}</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => {
              return <ProjectCard {...project}></ProjectCard>;
            })}
          </div>

        </div>
        
      </div>
    </section>
  );
}
export default Work;
