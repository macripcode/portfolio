import React, { useRef, useState, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/Work/work.css";

function ProjectCard({project}) {


  return (
    <SwiperSlide>
      <div>
        <div className="div-screenshot"></div>

        <div className="div-content">
          <div className="title-project"></div>
          <div className="description-project"></div>
          <div className="techstack-project"></div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default ProjectCard;
