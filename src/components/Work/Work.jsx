import React, { useRef, useState, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { useTranslation } from "../../context/TranslationContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/Work/work.css";

function Work() {
  const { lang } = useContext(LanguageContext);
  const translation = useTranslation();

  const work = translation.work;
  const title = work.title;
  const projects = work.projects;

  return (
    <div className="work-slider-div">
      <h2 className="work-title">{title}</h2>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {projects.map((project, index) => {
          const title = project.title;
          const description = project.description;
          const techStack = project.techStack;
          const date = project.date;
          const resourceUrl = project.resourceUrl;
          const resourceType = project.resourceType;

          return (
            <SwiperSlide key={index}>
              <div className="swiper-div">
                <div className="resource-div">
                  {resourceType === "image" && (
                    <img src={resourceUrl} alt="Project resource" />
                  )}

                  {resourceType === "youtube" && (
                    <iframe
                      width="100%"
                      height="100%"
                      src={resourceUrl}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>

                <div className="div-content">

                  <div className="title-project">
                    <p>{title}</p>
                  </div>

                  <div
                    className="description-project"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                  <div className="techstack-project">
                    <p>
                      <strong>Tech Stack:</strong> {techStack.join(" | ")}
                    </p>
                  </div>
                  <div className="date-project">
                    <p>{date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default Work;
