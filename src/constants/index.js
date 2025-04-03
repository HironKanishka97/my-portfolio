import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React And Angular, as well as back-end technologies like SpringBoot.I have experience working with databases such as MySQL and PostgreSQLMy goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack software engineer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including Angular ,React, SpringBoot, MySQL, PostgreSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EDUCATION = [
  {
    year: "2021 - 2025",
    university: "University Of Colombo School Of Computing",
    description: `Bachelor of Information Technology at UCSC  .`,
    technologies: ["SpringBoot", "React.js", "Angular", "MySql", "PostgreSql"],

  },
  {
    year: "2018 - 2022",
    university: "Institute of Engineering Technology",
    description: `National Diploma In Engineering Sciences in Electronic & Communication Engineering`,
    technologies: ["Electronics", "Robotics", "Automation", "Communication Engineeering", "Embedded systems"],

  },
];

export const PROJECTS = [
  {
    title: "Purchase, Production Process And Inventory Management System",
    image: project1,
    description:
      "Developed a Purchase, Production Process, and Inventory Management System as the "+
      "final year project at University of Colombo using Angular and Spring Boot."+
      " This system streamlines the purchase, manufacturing, and inventory tracking processes, enhancing operational efficiency and effectiveness",
    technologies: ["SpringBoot","Spring Security", "Angular", "Angular Material", "MySql"],
  },
  {
    title: "'WonlineStore' Retail Store Web Appcation",
    image: project2,
    description:
      "Developed a Web Appfor Wonlinestore, an retail store . The project utilizes Spring Boot for the backend, React for the frontend, and Spring Security with JWT Authentication for secure user authentication and authorization."+
      "This Web App supports Client, Order Process, Product, Inventory and User Management ."+
      "The MySQL database used as the database.",
    technologies: ["SpringBoot","Spring Security", "React", "Redux", "MySql"],
  },
  {
    title: "'Cycling' - Bicycle Product Showcase Web App",
    image: project3,
    description:
      "Developed a responsive app for a bicycle product using React, Tailwind CSS, and Framer Motion. Designed with a mobile-first approach, the page features smooth animations for enhanced user interaction. Tailwind CSS was used for efficient styling, while Framer Motion added dynamic motion effects. The app is deployed on Netlify for easy access and live demonstration."+
      " Live preview : 'https://cycling-web.netlify.app/'",

    technologies: ["React","Tailwind CSS", "Framer Motion"],
  },
  {
    title: "REST API with Microservices Architecture for Bookshop",
    image: project4,
    description:
      "Rani-Bookshop Rest API is a project aimed at creating a highly scalable and modular Spring Boot REST API with a Microservices Architecture for an online bookshop platform. The goal of this project is to divide the platform into separate microservices, each responsible for a different part of the system, which work together to deliver a cohesive solution.",
    technologies: ["SpringBoot","Microservices", "Spring Cloud",  "MySql"],
  },
  {
    title: "HK-Lapstore Web Application",
    image: project5,
    description:
      "Developed a comprehensive Client, Order Process, Inventory and User Management System for HK-Lapstore . The project utilizes Spring Boot for the backend, Angular for the frontend, and Spring Security with JWT Authentication for secure user authentication and authorization. The MySQL database used as the database. ",
    technologies: ["SpringBoot","Spring Security", "Bootstrap","Angular", "MySql"],

  },
];

export const CONTACT = {
  email: "hirokanishka97@gmail.com",
};

export const SOCIAL={
  linkedin:"https://linkedin.com/in/hiron-kanishka",
  github:"https://github.com/HironKanishka97",
  instargram:"https://www.instagram.com/____hiron____",

}

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

