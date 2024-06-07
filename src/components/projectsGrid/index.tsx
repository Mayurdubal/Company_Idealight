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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Education",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStudy: 1,
    project_overview:
      "The Bartleby Education Project aims to leverage Bartleby, an educational platform, to enhance student learning and support. Bartleby provides a range of services, including textbook solutions, expert Q&A, and personalized study help. This project will focus on integrating Bartleby's resources into educational institutions to improve student outcomes and engagement.",
    objective: [
      "Enhance Learning Outcomes: Utilize Bartleby’s resources to provide students with additional learning support, leading to improved academic performance.",
      "Increase Accessibility: Make high-quality educational resources easily accessible to students anytime and anywhere.",
      "Support Educators: Provide teachers with tools and resources to supplement their teaching and support their students more effectively.",
      "Foster Self-Paced Learning: Encourage students to engage in self-paced learning through access to Bartleby’s comprehensive resources."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Integration with Existing Systems: Ensuring seamless integration of Bartleby’s platform with the institution’s existing Learning Management Systems (LMS).",
      "Adoption by Students and Faculty: Encouraging both students and faculty to utilize the new resources available through Bartleby.",
      "Data Privacy and Security: Maintaining compliance with educational data protection regulations and ensuring student data privacy.",
      "Measuring Impact: Effectively measuring the impact of Bartleby’s resources on student learning outcomes.",
      "Comprehensive Integration Plan: Develop a detailed plan to integrate Bartleby’s platform with the institution’s LMS, including testing phases to ensure compatibility and smooth operation.",
      "raining Programs: Conduct training sessions for both students and faculty to familiarize them with Bartleby’s resources and how to use them effectively.",
      "Robust Security Measures: Implement advanced security protocols to protect student data and comply with educational regulations.",
      "Impact Assessment Tools: Develop tools and methods to assess the impact of Bartleby’s resources on student performance and engagement."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Inventory Management",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStudy: 2,
    project_overview:
      "The Designer Watches LLP Inventory Management Project aims to streamline and enhance the inventory management processes for Designer Watches LLP, a company specializing in high-end designer watches. The project focuses on implementing a robust inventory management system to improve inventory tracking, reduce losses, optimize stock levels, and enhance overall operational efficiency.",
    objective: [
      "Improve Inventory Tracking: Implement a system to accurately track inventory levels in real-time.",
      "Reduce Inventory Losses: Minimize losses due to theft, misplacement, or errors through better management practices.",
      "Optimize Stock Levels: Ensure optimal stock levels to meet customer demand without overstocking or understocking.",
      "Enhance Operational Efficiency: Streamline inventory processes to save time and reduce costs."
    ],
    requirements_gathering: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique."
        ],
        technology_stack: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique."
        ]
      }
    ],
    development: [
      {
        front_end: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique."
        ],
        back_end: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique."
        ]
      }
    ],
    testing: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    "
    ],
    deployment: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    "
    ],
    challenges: [
      "Integration with Existing Systems: Ensuring the new inventory management system integrates seamlessly with existing sales, accounting, and supply chain systems.",
      "Accurate Data Entry: Ensuring that all inventory data is accurately entered into the system to avoid discrepancies.",
      "Training Employees: Training staff to effectively use the new inventory management system.",
      "Scalability: Ensuring the system can scale with the company's growth and handle increased inventory volumes.",
      "Robust Inventory Management System : Implement a comprehensive system with features such as real-time tracking, automated reorder points, and detailed reporting.",
      "Barcode and RFID Technology: Utilize barcode scanners and RFID tags to enhance accuracy and speed of inventory tracking.",
      "Employee Training Programs: Conduct thorough training sessions for employees to ensure they can efficiently use the new system.",
      "Integration Tools: Use integration tools and APIs to connect the inventory management system with existing software solutions.",
      "Regular Audits and Reviews :  Implement regular inventory audits and system reviews to ensure data accuracy and system efficiency."
    ],
    outcomes: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique."
    ],
    img: "/designer.svg"
  },

  {
    id: 3,
    name: "uk-post-office",
    title: "UK Post Office",
    category: "Govt",
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Govt",
    caseStudy: 3,
    project_overview:
      "The UK Post Office is embarking on a government project aimed at modernizing its operations to improve efficiency, customer service, and overall functionality. This project involves the implementation of new technologies and processes to streamline services, enhance user experience, and support the organization's long-term sustainability.",
    objective: [
      "Modernize Operations: Implement advanced technologies to streamline operations and reduce manual processes.",
      "Enhance Customer Service: Improve the customer experience by offering faster, more reliable, and user-friendly services.",
      "Increase Efficiency: Optimize resource utilization to reduce operational costs and improve service delivery.",
      "Ensure Sustainability: Develop a sustainable operational model that supports long-term growth and adaptability."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Legacy System Integration: Integrating new technologies with existing legacy systems without causing disruptions.",
      "Data Security and Privacy: Ensuring the security and privacy of customer data amidst the implementation of new digital solutions.",
      "Staff Training and Adaptation: Training employees to effectively use new systems and adapt to changes in operational processes",
      "Customer Adaptation: Encouraging customers to adopt and utilize new digital services.",
      "Advanced IT Infrastructure: Develop and implement a robust IT infrastructure to support new technologies and services.",
      "Digital Platforms:  Introduce digital platforms for services such as postal tracking, payments, and customer support.",
      "Comprehensive Training Programs: Conduct extensive training sessions for employees to ensure they are proficient in using new technologies.",
      "Public Awareness Campaigns: Launch campaigns to educate customers about new services and encourage their use."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Inventory Management",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStudy: 4,
    project_overview:
      "The Nike Inventory Management Project aims to optimize and enhance the efficiency of Nike's inventory management processes. This project focuses on implementing advanced technologies and strategies to ensure accurate tracking, reduce excess inventory, improve supply chain efficiency, and ultimately enhance customer satisfaction.",
    objective: [
      "Improve Inventory Accuracy : Implement systems to ensure real-time tracking and accurate inventory data.",
      "Reduce Excess Inventory : Optimize inventory levels to reduce holding costs and minimize excess stock.",
      "Enhance Supply Chain Efficiency : Streamline supply chain processes to ensure timely restocking and reduced lead times.",
      "Boost Customer Satisfaction : Ensure product availability and timely delivery to enhance the overall customer experience."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Integration with Existing Systems: Ensuring seamless integration of new inventory management technologies with Nike’s existing IT infrastructure.",
      "Accuracy and Consistency : Maintaining accurate and consistent inventory data across multiple channels and locations.",
      "Demand Forecasting : Accurately predicting customer demand to optimize inventory levels and reduce stockouts or overstocking.",
      "Employee Training and Adaptation : Training employees to effectively use new inventory management tools and adapt to new processes.",
      "Advanced Inventory Management System : Implement a robust inventory management system with real-time tracking and automated updates.",
      "Demand Forecasting Tools: Use advanced analytics and machine learning algorithms to improve demand forecasting accuracy.",
      "RFID Technology: Implement RFID (Radio-Frequency Identification) for precise inventory tracking and reduced manual errors.",
      "Training Programs: Develop comprehensive training programs for employees to ensure effective use of new systems and adherence to new processes.",
      "Integration Middleware: Utilize middleware solutions to facilitate seamless integration between new inventory systems and existing IT infrastructure."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Finance",
    external_link: "https://investmentapp.idealite.in/",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Finance",
    caseStudy: 5,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.",
    objective: [
      "Optimize Investment Management: Enhance the efficiency and effectiveness of investment management processes through technology.",
      "Enhance Data Analytics: Leverage advanced data analytics to gain deeper insights into market trends and investment opportunities.",
      "Improve Client Services: Provide more personalized and timely services to clients by utilizing advanced technology solutions.",
      "Ensure Security and Compliance: Implement robust security measures to protect financial data and ensure compliance with regulatory standards."
    ],
    requirements_gathering: [""],
    system_architecture_design: [
      {
        architecture_selection: [""],
        technology_stack: [""]
      }
    ],
    development: [
      {
        front_end: [""],
        back_end: [""]
      }
    ],
    testing: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    "
    ],
    deployment: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    "
    ],
    challenges: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    "
    ],
    outcomes: [""],
    img: "/smi.svg"
  },

  {
    id: 6,
    name: "qritive",
    title: "Qritive",
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 6,
    project_overview:
      "Qritive is an innovative healthcare technology company that leverages artificial intelligence (AI) to enhance pathology services, particularly in cancer diagnosis. This project aims to integrate Qritive's advanced AI-driven pathology solutions with Optum and UnitedHealthcare (UHC) to improve diagnostic accuracy, efficiency, and patient outcomes.",
    objective: [
      "nhance Diagnostic Accuracy: Utilize Qritive's AI tools to support pathologists in making precise and reliable cancer diagnoses.",
      "Increase Efficiency: Streamline diagnostic workflows to reduce turnaround times for pathology results.",
      "Seamless Integration: Ensure that Qritive’s AI tools integrate smoothly with Optum and UHC’s existing health information systems.",
      "Maintain Compliance: Adhere to healthcare regulations and ensure robust patient data security."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "System Integration: Ensuring seamless integration of Qritive’s AI tools with the existing complex IT infrastructure of Optum and UHC.",
      "Data Security and Privacy: Maintaining compliance with stringent healthcare regulations such as HIPAA to ensure patient data security and privacy.",
      "Adoption and Training: Ensuring that healthcare professionals are adequately trained and comfortable using new AI tools.",
      "Ongoing Support and Monitoring: Providing continuous support and monitoring to ensure the AI tools function correctly and efficiently.",
      "Robust Integration Strategy: Develop a detailed integration plan, including thorough testing phases to ensure seamless connectivity with existing systems.",
      "Comprehensive Training Programs: Implement extensive training sessions and provide detailed user manuals for pathologists and lab technicians.",
      "Advanced Security Protocols: Implement state-of-the-art security measures to ensure data protection and compliance with regulatory standards.",
      "Continuous Monitoring and Support: Set up a system for continuous monitoring of AI tool performance and gather user feedback for ongoing improvements."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 7,
    project_overview:
      "This healthcare project focuses on integrating advanced AI-driven pathology solutions from Qritive into the services provided by Optum and UnitedHealthcare (UHC). The aim is to enhance diagnostic accuracy, streamline workflows, and improve patient outcomes through cutting-edge technology.",
    objective: [
      "Enhance Diagnostic Accuracy: Leverage Qritive's AI tools to support pathologists in making precise and reliable cancer diagnoses.",
      "Increase Efficiency: Streamline diagnostic workflows to reduce turnaround times for pathology results.",
      "Seamless Integration: Ensure Qritive’s AI tools integrate smoothly with Optum and UHC’s existing health information systems.",
      "Ensure Compliance: Adhere to healthcare regulations and ensure robust patient data security."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "System Integration: Ensuring the seamless integration of Qritive’s AI tools with the existing IT infrastructure of Optum and UHC.",
      "Data Security and Privacy: Maintaining compliance with stringent healthcare regulations such as HIPAA to ensure patient data security and privacy.",
      "Adoption and Training: Ensuring that healthcare professionals are adequately trained and comfortable using new AI tools.",
      "Ongoing Support and Monitoring: Providing continuous support and monitoring to ensure the AI tools function correctly and efficiently.",
      "Robust Integration Plan: Develop a detailed integration plan, including thorough testing phases to ensure seamless connectivity with existing systems.",
      "Comprehensive Training Programs: Implement extensive training sessions and provide detailed user manuals for pathologists and lab technicians.",
      "Advanced Security Protocols:  Implement state-of-the-art security measures to ensure data protection and compliance with regulatory standards.",
      "Continuous Monitoring and Support: Set up a system for continuous monitoring of AI tool performance and gather user feedback for ongoing improvements."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 8,
    project_overview:
      "The LoFoods Project is an initiative in the healthcare sector aimed at promoting healthy eating habits and improving overall health outcomes through the provision of low-calorie, nutritious food options. The project focuses on leveraging advanced technology and data analytics to create personalized dietary plans, track health metrics, and ensure the availability of healthy food choices.",
    objective: [
      "Promote Healthy Eating: Encourage healthier eating habits among consumers by providing accessible, nutritious, low-calorie food options.",
      "Improve Health Outcomes: Reduce the prevalence of diet-related health issues such as obesity, diabetes, and cardiovascular diseases.",
      "Personalized Nutrition: Develop personalized dietary plans based on individual health data and nutritional needs.",
      "Increase Accessibility: Ensure that healthy food options are widely available and affordable."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Behavioral Change: Encouraging consumers to change their eating habits and adopt healthier diets.",
      "Data Privacy: Ensuring the privacy and security of sensitive health and nutritional data.",
      "Supply Chain Management: Managing the supply chain to ensure the availability and freshness of healthy food products.",
      "Integration with Healthcare Systems: Integrating dietary and nutritional data with existing healthcare systems for holistic health management.",
      "Scalability: Scaling the project to reach a larger population while maintaining the quality and consistency of services.",
      "Personalized Dietary Plans: Use advanced data analytics and machine learning to create personalized dietary plans based on individual health data.",
      "Health Tracking Tools: Develop mobile applications and wearables to track dietary intake, physical activity, and health metrics.",
      "Educational Campaigns: Conduct awareness campaigns to educate the public on the benefits of healthy eating and how to make better food choices.",
      " Partnerships with Suppliers: Partner with local and regional food suppliers to ensure a steady supply of fresh, nutritious foods.",
      "Robust Data Security Measures: Implement strong data security protocols to protect user data and comply with regulatory standards."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Fitness",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Fitness",
    caseStudy: 9,
    project_overview:
      "The Alphacoach project is designed to improve health and fitness outcomes by offering customized coaching plans tailored to individual needs. It leverages data analytics, artificial intelligence, and modern digital tools to provide users with real-time insights, track their progress, and adjust their plans accordingly.",
    objective: [
      "Personalized Health Plans: Develop tailored health and fitness programs based on individual data and health goals.",
      "Promote Sustainable Habits: Encourage the adoption of lasting healthy habits through continuous coaching and motivation.",
      "Monitor Health Metrics: Track and analyze various health metrics to ensure progress and make necessary adjustments.",
      "Increase User Engagement: Create an engaging platform that motivates users to stay committed to their health goals."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Data Integration: Combining data from multiple sources such as wearables, medical records, and user inputs.",
      "User Adoption and Consistency: Ensuring users consistently engage with and benefit from the platform.",
      "Data Privacy and Security: Protecting sensitive health information and complying with data protection regulations.",
      "Scalability: Building a platform that can scale to accommodate a growing user base.",
      "Accurate Personalization: Continuously improving the accuracy of personalized recommendations based on diverse data inputs.",
      "Unified Data Platform: Develop a platform that aggregates and analyzes data from various sources to provide a comprehensive view of each user's health.",
      "Engagement Strategies: Implement gamification, reminders, rewards, and social features to boost user engagement and retention.",
      "Robust Security Measures: Utilize strong encryption and data protection protocols to secure user information.",
      "Scalable Infrastructure: Employ cloud-based solutions to ensure the platform can scale effectively.",
      "AI and Machine Learning: Use AI and machine learning algorithms to analyze data and provide accurate, personalized health and fitness recommendations."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "NGO",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "NGO",
    caseStudy: 10,
    project_overview:
      "The Bhavyata Foundation project is an initiative by the NGO to address critical social issues and improve the quality of life for underprivileged communities. The foundation focuses on areas such as education, healthcare, rural development, and skill training. By leveraging community participation and sustainable practices, the project aims to create a long-lasting positive impact.",
    objective: [
      "Empower Communitie: Provide education, healthcare, and skill development opportunities to underprivileged communities.",
      "Sustainable Development: Promote sustainable practices in rural development to ensure long-term benefits.",
      "Healthcare Accessibility: Improve access to essential healthcare services for marginalized populations.",
      "Educational Support: Enhance educational infrastructure and provide resources for quality education.",
      "Skill Training: Offer vocational training programs to enhance employability and economic independence."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Resource Allocation: Ensuring efficient use of limited resources to maximize impact.",
      "Community Engagement: Encouraging active participation from the community in various initiatives.",
      "Sustainability: Implementing projects that are sustainable and can continue without ongoing external support.",
      "Monitoring and Evaluation: Effectively tracking the progress and impact of the initiatives.",
      "Funding: Securing consistent funding to support various programs and initiatives.",
      "Partnerships: Collaborate with other NGOs, government bodies, and private sector partners to pool resources and expertise.",
      "Community Involvement: Engage community members in the planning and implementation of projects to ensure their needs are met and to foster ownership.",
      "Sustainable Practices: Focus on environmentally sustainable practices in all development projects to ensure long-term viability.",
      "Robust Monitoring Systems: Develop monitoring and evaluation frameworks to track progress and measure impact.",
      "Diversified Funding Sources: Seek funding from multiple sources, including grants, donations, and corporate social responsibility (CSR) initiatives."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Education",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStudy: 11,
    project_overview:
      "The LeMark Education project is an initiative aimed at enhancing the quality of education through innovative teaching methods and advanced technology. LeMark Education focuses on providing comprehensive educational programs that cater to various learning needs, utilizing digital tools and modern pedagogical approaches to improve learning outcomes and engagement.",
    objective: [
      "Enhance Educational Quality: Improve the overall quality of education by integrating advanced teaching methods and technologies.",
      "Increase Accessibility: Make education more accessible to a broader audience, including underprivileged and remote learners.",
      "Personalized Learning: Develop personalized learning paths to cater to the unique needs and pace of each student.",
      "Professional Development: Provide training and resources for educators to enhance their teaching skills and adapt to new technologies."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Technology Integration: Integrating advanced technology into traditional educational systems.",
      "Digital Divide: Ensuring all students have access to necessary digital tools and internet connectivity.",
      "Teacher Training: Equipping educators with the skills and knowledge to effectively use new technologies and teaching methods.",
      "Student Engagement: Keeping students engaged and motivated in a digital learning environment.",
      "Resource Allocation: Efficiently allocating resources to maximize impact and reach.",
      "E-Learning Platforms: Develop and deploy e-learning platforms that provide interactive and engaging educational content.",
      "Blended Learning Models: Implement blended learning models that combine online and offline education to enhance flexibility and accessibility.",
      "Teacher Training Programs: Offer comprehensive training programs for teachers to help them adapt to new technologies and teaching strategies.",
      "Digital Inclusion Initiatives: Launch initiatives to provide digital devices and internet access to underprivileged students.",
      "Personalized Learning Tools: Use AI and data analytics to create personalized learning experiences tailored to each student's needs."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 12,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective: [
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 13,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective: [
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Healthcare",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStudy: 14,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective: [
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Service",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Service",
    caseStudy: 15,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective: [
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "Finance",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Finance",
    caseStudy: 16,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective: [
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 17,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective: [
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
    ],
    outcomes: [
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
    subheading:
      "From financial metrics to sales and marketing data, our dashboard provides you with a holistic view of your business operations.",
    category: "AI",
    external_link: "",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "AI",
    caseStudy: 18,
    project_overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo tellus id tellus laoreet laoreet. Etiam sollicitudin facilisis risus molestie lobortis. Etiam vel lectus quis turpis mattis ultricies. Sed auctor ex eget euismod consequat. Donec ultrices sollicitudin tortor a tristique.    ",
    objective: [
      "Develop a scalable and secure e-commerce platform. Ensure a user-friendly and responsive front end. Implement robust back-end services to handle business logic and data management. Integrate third-party payment gateways and shipping services.Provide an admin panel for inventory and order management."
    ],
    requirements_gathering: [
      "Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.",
      "Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.",
      "Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline."
    ],
    system_architecture_design: [
      {
        architecture_selection: [
          "Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability."
        ],
        technology_stack: [
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
    development: [
      {
        front_end: [
          "Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.",
          "Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.",
          "Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes."
        ],
        back_end: [
          "API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.",
          "Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.",
          "Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.",
          "Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods."
        ]
      }
    ],
    testing: [
      "Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.",
      "Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.",
      "User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback."
    ],
    deployment: [
      "Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.",
      "Containerization: Deployed applications using Docker containers to ensure consistency across different environments.",
      "Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues."
    ],
    challenges: [
      "Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.",
      "Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.",
      "Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets."
    ],
    outcomes: [
      "Successfully launched the e-commerce platform within the stipulated timeline and budget.",
      "Achieved a significant increase in online sales and customer engagement.",
      "Received positive feedback from users for the platform's performance, usability, and security."
    ],
    img: "/wordflo_ai.png"
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
                  <a href={item.external_link} target="_blank">
                    <Image
                      className="caseButton"
                      src="/caseButton.svg"
                      width={140}
                      height={140}
                      alt="caseStudy"
                    />
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
