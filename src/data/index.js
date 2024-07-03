import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

import notes from "../assets/Notes.jpg"

import wehter from "../assets/wether_app.jpg"

import recharge from "../assets/Recharge_app.svg"

import Ehr from "../assets/Ehr_sys.jpg"


export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Numetry Technology",
    date: "2024 March - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
      "Worked in the <span style='color: white;'>Backend Developer</span> team focusing on Spring Boot, Hibernate and Mysql technology.",
      "Developed a Login Registration <span style='color: white;'>Authentication and Authorization API </span>with full functionality for user and admin access.",
      "Implemented a single login portal where admins access the admin dashboard using their office-provided email, while users access their dashboard using their respective user emails.",
      "<span style='color: white;'>Collaborated with team members</span> to ensure seamless integration of the API with existing systems.",
      "Participated in code reviews and <span style='color: white;'>debugging sessions</span> to maintain code quality and resolve issues promptly."
    ],
  },
  // {
  //   title: "Software Developer",
  //   company_name: "Indie",
  //   date: "2019 - 2023",
  //   details: [
  //     "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
  //     "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
  //     "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
  //   ],
  // },
];

const portfolio = [
  {
    name: "Cloud web App",
    description:
      "React, JSON, Tomorrow.io API, Geocoding, Springboot A webpage allows users to search for weather information anywhere in the world or current location and for any past date.",
    image:  wehter,
  },
  {
    name: "Notes Taking App",
    description:
      " React, Spring-Boot A Note IT web application for taking and managing notes, developed using React for the frontend and Spring Boot for the backend, offering aseamless user experience",
    image:  notes,
  },
  // {
  //   name: "ChatGPT Project Chat Web App with GPT",
  //   description:
  //     "A ChatGPT project chat application built with React, integrating the GPT (Generative Pre-trained Transformer) model for intelligent conversational interactions.",
  //   image: algorithms,
  // },
  {
    name: "EHR System For Smart Ambulance",
    description:
      "An Electronic Health Record (EHR) system tailored for smart ambulances, employing HTML/CSS, JavaScript, Servlets, JSP, and Google Maps API for efficient patient data management and real-time navigation.",
    image: Ehr,
  },
  // {
  //   name: "Map-pharma",
  //   description:
  //     "A comprehensive web application developed with React for the frontend and Spring Boot for the backend, integrating Google Maps API to facilitate easy location-based search and navigation for pharmacies",
  //   image: algorithms,
  // },
  // {
  //   name: "Honey word Detection",
  //   description:
  //     "Honey word Detection: An advanced security application utilizing React for the frontend, Spring Boot for the backend, and MySQL for data storage, designed to detect unauthorized access attempts through the implementation of honey words.",
  //   image: algorithms,
  // },

  {
    name: "Recharge web application",
    description:
      "A user-friendly recharge web application leveraging HTML/CSS, Servlet, and JSP technologies for seamless online mobile number recharges with integrated payment processing.",
    image: recharge,
  },

];

export { experiences, portfolio };

