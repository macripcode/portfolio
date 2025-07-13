import { Language } from "@mui/icons-material";

export const translations = {
  en: {
    header: {
      navbar: ["About Me", "Experience", "Projects", "Languages"],
    },
    hero: {
      greeting: `Hello!`,
      title: `About Me`,
      text: `
        <p>I'm a consistent and disciplined frontend developer focused on building visually appealing, functional, and scalable solutions with a strong emphasis on UI/UX design.</p>
        <p>I also have experience with backend technologies like <strong>PHP</strong> and <strong>Django</strong>, giving me a well-rounded perspective on web development.</p>
      `,
      downloadMyCV: `Download My CV`,
      contactMe: `Contact Me`,
    },
    experience: {
      title: `Professional Experience and Education`,
      viewMore: `Show More`,
      viewLess: `Show less`,
      careerPath: [
        {
          type: "job",
          date: "June 2020 – January 2025",
          rol: "Software Engineer at Spectrio",
          location: "Remote",
          projects: [
            {
              title: "Retail Radio Project",
              description: [
                `Improved the user experience by 80%, as measured by user feedback and reduced issue reports, by refactoring legacy UI components.`,
                `Reduced user-reported bugs by 40%, as measured by support tickets, by fixing time display logic and ensuring accurate music playback.`,
                `Increased documentation clarity by 10%, as measured by faster onboarding, by mapping and documenting legacy internal systems.`,
              ],
              techStack: ["HTML", "CSS", "JavaScript", "Python/Django"],
            },
            {
              title: "Little Caesars Project",
              description: [
                `Completed 100% of development tasks on time, as measured by delivery deadlines, by integrating the Daypart feature into legacy systems.`,
                `Strengthened client-vendor relationship, as measured by positive feedback post-demo, by delivering a stable and fully working features implementation.`,
                `Maintained high system stability over 4 years, as measured by consistent uptime and bug resolution, by addressing reported issues and integrating new features.`,
              ],
              techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "PHP/Codeigniter",
              ],
            },
            {
              title: "Industry Weapon Apps",
              description: [
                `Resolved over 50+ UI-related bugs in different apps, measured by internal QA reports, and reduced user complaints.`,
              ],
              techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "AngularJS",
                "PHP/Codeigniter",
              ],
            },
          ],
        },
        {
          type: "job",
          date: "July 2018 – June 2020",
          rol: "Software Engineer at Clientify",
          location: "Remote",
          projects: [
            {
              title: "Internal CMR Platform",
              description: [
                `Improved data processing performance by ~80%, as measured by faster processing time and reduced server load, by cleaning and restructuring data pipelines.`,
                `Enhanced usability of key platform features, as measured by internal feedback and smoother navigation, by redesigning UI components like contact profiles and the media loader.`,
              ],
              techStack: ["HTML", "CSS", "JavaScript", "Python/Django"],
            },
          ],
        },
        {
          type: "education",
          date: "December 2019",
          rol: "Bachelor in Software Engineering",
          location: "On Site",
          projects: [
            {
              title: "Project Degree: UV DomJudge ",
              description: [
                `Developed a web platform to support the evaluation of students in programming courses. The system integrates virtual judges for automatic assessment and leverages container-based virtualization to provide isolated execution environments. The project involved classifying existing educational virtual judges based on their evaluation features and API availability, selecting an appropriate virtualization technology, and designing a modular architecture for both frontend and backend components. The entire solution was implemented using Django and modern web technologies, followed by comprehensive testing and the creation of user guides and tutorials to facilitate its adoption.`,
              ],
              techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python/Django",
                "Docker",
                "RabbitMQ",
                "DOMJudge",
              ],
            },
          ],
        },
      ],
    },
    work: {
      title: "Projects",
      projects: [
        {
          title: "Resume",
          description:
            "Designed and developed a modern portfolio to present my work and experience.",
          techStack: ["HTML", "CSS", "JavaScript", "React"],
          date: "2025",
          resourceUrl: "/assets/resume.png",
          resourceType: "image",
        },
        {
          title: "UVDOMJugde",
          description: `<p>Web platform for automatic evaluation of programming students using virtual judges and Docker-based isolated environments. You can check the repositories in the next links: 
          <a class="link-project" href="https://github.com/macripcode/api-uvdomjudge" target="_blank" rel="noopener noreferrer"> API UVDomJudge </a> , <a class="link-project" href="https://github.com/macripcode/containers-uvdomjudge" target="_blank" rel="noopener noreferrer"> Containers UVDomJudge</a>, <a class="link-project" href="https://github.com/macripcode/app-uvdomjudge" target="_blank" rel="noopener noreferrer"> App UVDomJudge</a></p> `,
          techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python/Django",
            "Docker",
            "RabbitMQ",
            "DOMJudge",
          ],
          date: "2019",
          resourceUrl: "https://www.youtube.com/embed/8gwlrHjYmvI",
          resourceType: "youtube",
        },
      ],
    },
    languages: {
      title: `Languages`,
      languages: [
        {
          name: "Spanish",
          level: "Native",
          levelNumber: 5,
        },
        {
          name: "English",
          level: "C1 (Advanced Level)",
          levelNumber: 8,
        },
      ],
    },
  },
  es: {
    header: {
      navbar: ["Acerca de Mi", "Experiencia", "Proyectos", "Idiomas"],
    },
    hero: {
      greeting: `Hola!`,
      title: `Acerca de Mi`,
      text: `
        <p>Soy una desarrolladora frontend constante y disciplinada, enfocada en crear soluciones visualmente atractivas, funcionales y escalables, con una fuerte atención al diseño UI/UX.</p>
        <p>Además, cuento con experiencia previa en tecnologías backend como <strong>PHP</strong> y <strong>Django</strong>, lo que me permite tener una visión integral del desarrollo web.</p>
      `,
      downloadMyCV: `Descarga mi CV`,
      contactMe: `Contactame`,
    },
    experience: {
      etitle: `Experiencia Profesional y Educación`,
      viewMore: `Mostrar más`,
      viewLess: `Mostrar menos`,
      careerPath: [
        {
          type: "job",
          date: "Junio 2020 – Enero 2025",
          rol: "Desarrollador Full Stack en Spectrio",
          location: "Remoto",
          projects: [
            {
              title: "Proyecto Retail Radio",
              description: [
                `Mejoré la experiencia de usuario en un 80%, según comentarios de usuarios y reducción de reportes, mediante la refactorización de componentes heredados.`,
                `Reduje los errores reportados por usuarios en un 40%, según los tickets de soporte, corrigiendo la lógica de visualización del tiempo y asegurando una reproducción precisa de música.`,
                `Aumenté la claridad de la documentación en un 10%, según el tiempo de incorporación, al mapear y documentar sistemas internos heredados.`,
              ],
              techStack: ["HTML", "CSS", "JavaScript", "Python/Django"],
            },
            {
              title: "Proyecto Little Caesars",
              description: [
                `Completé el 100% de las tareas de desarrollo a tiempo, según las fechas de entrega, integrando la funcionalidad Daypart en sistemas heredados.`,
                `Fortalecí la relación con el cliente, según comentarios positivos tras la demo, entregando una implementación estable y funcional.`,
                `Mantuve una alta estabilidad del sistema durante 4 años, con buen uptime y resolución de errores, al atender los problemas reportados e integrar nuevas funcionalidades.`,
              ],
              techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "PHP/Codeigniter",
              ],
            },
            {
              title: "Aplicaciones Industry Weapon",
              description: [
                `Resolví más de 50 errores de UI en diferentes apps, según reportes internos de QA, lo que redujo las quejas de usuarios.`,
              ],
              techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "AngularJS",
                "PHP/Codeigniter",
              ],
            },
          ],
        },
        {
          type: "job",
          date: "Julio 2018 – Junio 2020",
          rol: "Desarrollador en Clientify",
          location: "Remoto",
          projects: [
            {
              title: "Plataforma Interna de CRM",
              description: [
                `Mejoré el rendimiento del procesamiento de datos en un ~80%, con menor carga en el servidor, al limpiar y reestructurar los pipelines de datos.`,
                `Mejoré la usabilidad de funciones clave de la plataforma, según retroalimentación interna, rediseñando componentes como el perfil de contactos y el cargador de medios.`,
              ],
              techStack: ["HTML", "CSS", "JavaScript", "Python/Django"],
            },
          ],
        },
        {
          type: "education",
          date: "Diciembre 2019",
          rol: "Ingeniera en Software",
          location: "Presencial",
          projects: [
            {
              title: "Proyecto de Grado: UV DomJudge",
              description: [
                `Desarrollé una plataforma web para apoyar la evaluación de estudiantes en cursos de programación. El sistema integra jueces virtuales para evaluación automática y utiliza virtualización basada en contenedores para entornos de ejecución aislados. El proyecto incluyó la clasificación de jueces virtuales educativos existentes, la selección de una tecnología de virtualización adecuada, y el diseño de una arquitectura modular para frontend y backend. La solución fue implementada con Django y tecnologías web modernas, seguida de pruebas exhaustivas y la creación de tutoriales para facilitar su adopción.`,
              ],
              techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python/Django",
                "Docker",
                "RabbitMQ",
                "DOMJudge",
              ],
            },
          ],
        },
      ],
    },
    work: {
      title: "Proyectos",
      projects: [
        {
          title: "Resume",
          description:
            "Diseñé y desarrollé un portafolio moderno para presentar mi trabajo y experiencia.",
          techStack: ["HTML", "CSS", "JavaScript", "React"],
          date: "2025",
          resourceUrl: "/assets/resume.png",
          resourceType: "image",
        },
        {
          title: "UVDOMJugde",
          description: `Plataforma web para evaluación automática de estudiantes de programación, usando jueces virtuales y entornos aislados con Docker. Puedes acceder a los repositorios en los siguientes links : <a class="link-project" href="https://github.com/macripcode/api-uvdomjudge" target="_blank" rel="noopener noreferrer"> API UVDomJudge </a> , <a class="link-project" href="https://github.com/macripcode/containers-uvdomjudge" target="_blank" rel="noopener noreferrer"> Containers UVDomJudge</a>, <a class="link-project" href="https://github.com/macripcode/app-uvdomjudge" target="_blank" rel="noopener noreferrer"> App UVDomJudge</a></p>`,
          techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python/Django",
            "Docker",
            "RabbitMQ",
            "DOMJudge",
          ],
          date: "2019",
          resourceUrl: "https://www.youtube.com/embed/8gwlrHjYmvI",
          resourceType: "youtube",
        },
      ],
    },
    languages: {
      title: `Idioma`,
      languages: [
        {
          name: "Español",
          level: "Nativo",
          levelNumber: 5,
        },
        {
          name: "Inglés",
          level: "C1 (Advanzado)",
          levelNumber: 4,
        },
      ],
    },
  },
};
