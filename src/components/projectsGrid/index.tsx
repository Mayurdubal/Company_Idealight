"use client";

import { useState } from "react";
import Image from "next/image";

import "./style.css";
import Link from "next/link";
import { title } from "process";

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
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective:
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
    requirements_gathering:[
            "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
            "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
            "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection:[  
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack:[
            "Front End: React.js for the user interface, Redux for state management.",
            "Back End: Node.js with Express.js for building RESTful APIs.",
            "Database: MongoDB for its scalability and flexibility with unstructured data.",
            "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
            "Payment Integration: Stripe API for processing payments.",
            "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
            "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
         ]
      }
    ],
    development:[
      {
        front_end:[
        "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
        "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
        "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
      ],
      back_end:[
        "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
        "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
        "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
        "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
      ],
     }
   ],
  testing:[
    "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
    "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
    "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
  ],
  deployment:[
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
  ],
  challenges:[
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
 ],
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
  project_overview:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services. Provide an admin panel for inventory and order management.",
  objective:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
  requirements_gathering:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
  system_architecture_design:[
    {
      architecture_selection: "",
      technology_stack: ""
    }
  ],
  development:[
    {
      front_end: "",
      back_end: ""
    }
  ],
  testing:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  deployment:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  challenges: "",
  outcomes: "",
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
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
    ],
    back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
    ],
    }
 ],
testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
 img: "/bartleby.svg"
},   

{
  id: 4,
  name: "nikee",
  title: "Nike",
  category: "Inventory Management",
  external_link: "",
  desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
  filter: "Systems",
  caseStudy: 4,
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
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
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    requirements_gathering:"",
    system_architecture_design:[
      {
        architecture_selection: "",
        technology_stack: "",
      }
    ],
    development:[
      {
        front_end: "",
        back_end: ""
      }
    ],
    testing:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    deployment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    outcomes: "",
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
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective:
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
    requirements_gathering:[
            "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
            "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
            "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection:[  
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack:[
            "Front End: React.js for the user interface, Redux for state management.",
            "Back End: Node.js with Express.js for building RESTful APIs.",
            "Database: MongoDB for its scalability and flexibility with unstructured data.",
            "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
            "Payment Integration: Stripe API for processing payments.",
            "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
            "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
        ]
      }
    ],
    development:[
      {
        front_end:[
        "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
        "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
        "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
       ],
       back_end:[
        "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
        "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
        "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
        "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
       ],
      }
   ],
  testing:[
    "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
    "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
    "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
  ],
   deployment:[
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
   ],
   challenges:[
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
   ],
   outcomes:[
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
   ],
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
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective:
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
    requirements_gathering:[
            "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
            "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
            "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection:[  
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack:[
            "Front End: React.js for the user interface, Redux for state management.",
            "Back End: Node.js with Express.js for building RESTful APIs.",
            "Database: MongoDB for its scalability and flexibility with unstructured data.",
            "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
            "Payment Integration: Stripe API for processing payments.",
            "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
            "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
        ]
      }
    ],
    development:[
      {
        front_end:[
        "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
        "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
        "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
       ],
       back_end:[
        "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
        "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
        "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
        "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
       ],
      }
   ],
  testing:[
    "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
    "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
    "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
  ],
   deployment:[
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
   ],
   challenges:[
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
   ],
   outcomes:[
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
   ],
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
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective:
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
    requirements_gathering:[
            "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
            "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
            "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection:[  
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack:[
            "Front End: React.js for the user interface, Redux for state management.",
            "Back End: Node.js with Express.js for building RESTful APIs.",
            "Database: MongoDB for its scalability and flexibility with unstructured data.",
            "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
            "Payment Integration: Stripe API for processing payments.",
            "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
            "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
         ]
      }
    ],
    development:[
      {
        front_end:[
        "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
        "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
        "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
       ],
       back_end:[
        "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
        "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
        "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
        "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
       ],
      }
   ],
  testing:[
    "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
    "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
    "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
  ],
   deployment:[
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
   ],
   challenges:[
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
   ],
   outcomes:[
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
   ],
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
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective:
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
    requirements_gathering:[
            "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
            "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
            "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection:[  
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack:[
            "Front End: React.js for the user interface, Redux for state management.",
            "Back End: Node.js with Express.js for building RESTful APIs.",
            "Database: MongoDB for its scalability and flexibility with unstructured data.",
            "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
            "Payment Integration: Stripe API for processing payments.",
            "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
            "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
        ]
      }
    ],
    development:[
      {
        front_end:[
        "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
        "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
        "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
       ],
       back_end:[
        "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
        "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
        "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
        "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
       ],
      }
   ],
  testing:[
    "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
    "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
    "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
  ],
   deployment:[
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
   ],
   challenges:[
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
   ],
   outcomes:[
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
   ],
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
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective:
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
    requirements_gathering:[
            "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
            "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
            "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection:[  
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack:[
            "Front End: React.js for the user interface, Redux for state management.",
            "Back End: Node.js with Express.js for building RESTful APIs.",
            "Database: MongoDB for its scalability and flexibility with unstructured data.",
            "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
            "Payment Integration: Stripe API for processing payments.",
            "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
            "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
        ]
      }
    ],
    development:[
      {
        front_end:[
        "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
        "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
        "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
       ],
       back_end:[
        "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
        "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
        "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
        "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
       ],
      }
   ],
  testing:[
    "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
    "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
    "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
  ],
   deployment:[
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
   ],
   challenges:[
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
   ],
   outcomes:[
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
   ],
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
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
  ],
  testing:[
    "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
    "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
    "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
  ],
  deployment:[
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
  ],
  challenges:[
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
  ],
  outcomes:[
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
  ],
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
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
 testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
 ],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
 img: "/revent_ai.png"
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
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
 testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
 ],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
 img: "/vecflow.png"
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
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
 testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
 ], 
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
 img: "/bajo_foods.png"
}, 
 

{
  id: 15,
  name: "atlassian",
  title: "Atlassiann",
  category: "Service",
  external_link: "",
  desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
  filter: "Service",
  caseStudy: 15,
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
 testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
 ],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
 img: "/atlassiann.png"
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
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
 testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
 ],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
 img: "/poker_boss.png"
}, 
 

{
  id: 17,
  name: "navirego-ai",
  title: "Navirego AI",
  category: "AI",
  external_link: "",
  desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
  filter: "AI",
  caseStudy: 17,
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
 testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
 ],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
 img: "/navirego_ai.png"
}, 
 

{
  id: 18,
  name: "wordflo-ai",
  title: "Wordflo AI",
  category: "AI",
  external_link: "",
  desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
  filter: "AI",
  caseStudy: 18,
  project_overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
  objective:
    "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management.",
  requirements_gathering:[
          "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
          "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
          "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
  ],
  system_architecture_design: [
    {
      architecture_selection:[  
        "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
      ],
      technology_stack:[
          "Front End: React.js for the user interface, Redux for state management.",
          "Back End: Node.js with Express.js for building RESTful APIs.",
          "Database: MongoDB for its scalability and flexibility with unstructured data.",
          "Authentication: JWT (JSON Web Tokens) for secure user authentication.",
          "Payment Integration: Stripe API for processing payments.",
          "Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.",
          "Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production."
      ]
    }
  ],
  development:[
    {
      front_end:[
      "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
      "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
      "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
     ],
     back_end:[
      "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
      "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
      "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
      "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
     ],
    }
 ],
 testing:[
  "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
  "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
  "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
 ],
 deployment:[
    "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
    "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
    "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.",
 ],
 challenges:[
    "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
    "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
    "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
 ],
 outcomes:[
    "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
    "Achieved a significant increase in online sales and customer engagement.",
    "Received positive feedback from users for the platform's performance, usability, and security."
 ],
  img: "/wordflo_ai.png"
 }, 
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
                  <a href="https://stockapp.idealite.in/" target="_blank">
                  <Image
                  className="caseButton"
                  src="/caseButton.svg"
                  width={140}
                  height={140}
                  alt="caseStudy"/>
                  </a>
                ) : (
                  <Link href={`/casestudy/${item.caseStudy}`}>
                    <Image
                      className="caseButton"
                      src="/caseButton.svg"
                      width={140}
                      height={140}
                      alt="caseStudy"
                    />
                  </Link>
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
