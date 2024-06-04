"use client";

import { useState } from "react";
import Image from "next/image";

import "./style.css";
import Link from "next/link";

export const projectData = [
  {
    id: 1,
    name: "bartleby",
    title: "Bartleby",
    category: "Education",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStudy: 1,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    img: "/bartleby.svg"
  },
  {
    id: 2,
    name: "designer-watches-llp",
    title: "Designer Watches LLP",
    category: "Inventory Management",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStudy: 2,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: "/designer.svg"
  },
  {
    id: 3,
    name: "uk-post-office",
    title: "UK Post Office",
    category: "Govt",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Govt",
    caseStudy: 3,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    img: "/bartleby.svg"
  },
  {
    id: 4,
    name: "nike",
    title: "Nike",
    category: "Inventory Management",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStudy: 4,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: "/nike.svg"
  },
  {
    id: 5,
    name: "tamohara",
    title: "Tamohara",
    category: "Finance",
    external_link: "https://stockapp.idealite.in/",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Finance",
    caseStudy: 5,
    objective:
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services. Provide an admin panel for inventory and order management.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "The Tamohara Project is a financial technology initiative aimed at enhancing investment management processes, improving data analytics capabilities, and providing superior client services. This project focuses on integrating advanced technologies to streamline operations, facilitate data-driven decision-making, and drive overall business growth within the finance sector.",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    img: "/smi.svg"
  },
  {
    id: 6,
    name: "qritive",
    title: "Qritive",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 6,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    img: "/qritive.svg"
  },
  {
    id: 7,
    name: "optum-uhc",
    title: "Optum + UHC",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 7,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: "/bartleby.svg"
  },
  {
    id: 8,
    name: "lofoods",
    title: "LoFoods",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 8,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: "/lofoods.svg"
  },
  {
    id: 9,
    name: "alphacoach",
    title: "Alphacoach",
    category: "Fitness",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Fitness",
    caseStudy: 9,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: "/alphacoach.svg"
  },
  {
    id: 10,
    name: "bhavyata-foundation",
    title: "Bhavyata Foundation",
    category: "NGO",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "NGO",
    caseStudy: 10,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: "/bhavyata.svg"
  },
  {
    id: 11,
    name: "lemark-education",
    title: "LeMark Education",
    category: "Education",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStudy: 11,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: "/lemark.svg"
  },
  {
    id: 12,
    name: "revent-ai",
    title: "Revent AI",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 12,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: ""
  },
  {
    id: 13,
    name: "vecflow",
    title: "Vecflow",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 13,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: ""
  },
  {
    id: 14,
    name: "bajo-foods",
    title: "BajoFoods",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 14,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: ""
  },
  {
    id: 15,
    name: "atlassian",
    title: "Atlassian",
    category: "Service",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Service",
    caseStudy: 15,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: ""
  },
  {
    id: 16,
    name: "poker-boss",
    title: "Poker Boss",
    category: "Finance",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Finance",
    caseStudy: 16,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: ""
  },
  {
    id: 17,
    name: "navirego-AI",
    title: "Navirego AI",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 17,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: ""
  },
  {
    id: 18,
    name: "wordflo-ai",
    title: "wordflo AI",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 18,
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    solutions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",

    img: ""
  }
];

const ProjectsGrid = () => {
  const [filterKey, setFilterKey] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const filteredData =
    filterKey === "all"
      ? projectData
      : projectData.filter((item) => item.category === filterKey);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="my-5">
      <ul className="category-list">
        <li>
          <button
            className={filterKey === "all" ? "active" : ""}
            onClick={() => setFilterKey("all")}
          >
            All ({projectData.length})
          </button>
        </li>
        {Object.entries(
          projectData.reduce((acc: Record<string, number>, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([category, count]) => (
          <li key={category}>
            <button
              className={filterKey === category ? "active" : ""}
              onClick={() => setFilterKey(category)}
            >
              {category}({count})
            </button>
          </li>
        ))}
      </ul>
      <div className="project-container">
        {filteredData.slice(0, visibleCount).map((item) => (
          <div className="project-card" key={item.id}>
            <div>
              <figure>
                <Image
                  src={`${item.img}`}
                  width={270}
                  height={270}
                  alt="bartleby"
                />
              </figure>
              <span>
                <h6>{item.category}</h6>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {item.external_link ? (
                <Link href={`/casestudy/${item.caseStudy}`}>
                <Image
                  className="caseButton"
                  src="/caseButton.svg"
                  width={140}
                  height={140}
                  alt="caseStudy"
                />
              </Link>
                ) : (
                  <></>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < filteredData.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default ProjectsGrid;
