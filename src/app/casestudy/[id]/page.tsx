"use client";

import { projectData } from "@/components/projectsGrid";
import "../style.css";
import { usePathname } from "next/navigation";

const CaseStudy = () => {
  const pathname = usePathname();
  const temp = pathname.lastIndexOf("/");
  const projectId = parseInt(pathname.slice(temp + 1), 10);
  return (
    <div className="case-study">
      <span className="title">
        <h2>Stock Investment Management</h2>
        <p>
          From financial metrics to sales and marketing data, our dashboard
          provides you with a holistic view of your business operations.
        </p>
      </span>
      <div>
        <div className="flex flex-row">
          <span className="overview section">
            <h4>Project Overview</h4>
            <p>{projectData[projectId - 1]?.overview}</p>
          </span>
          <span className="objective section">
            <h4>Objective</h4>
            <p>{projectData[projectId - 1]?.objective}</p>
          </span>
        </div>
      </div>
      <div className="project-phases">
          <h3>Project Phases</h3>
          <ol>
            <li className="phase-title">1. Requirements Gathering</li>
              <ul>
                <li className="phase-details">Stakeholder Interviews: Conducted detailed interviews with stakeholders to understand business requirements, target audience, and desired features.</li>
                <li className="phase-details">Competitive Analysis: Analyzed competitor websites to identify industry standards and unique selling propositions.</li>
                <li className="phase-details">Technical Feasibility Study: Assessed the technical feasibility of integrating required features within the given budget and timeline.</li>
              </ul>
            <li className="phase-title">2. System Architecture Design</li>
              <ul>
                <li>Architecture Selection: Chose a microservices architecture to ensure scalability and maintainability.</li>
                <li>Technology Stack:</li>
                <ul>
                  <li className="phase-details">Front End: React.js for the user interface, Redux for state management.</li>
                  <li className="phase-details">Back End: Node.js with Express.js for building RESTful APIs.</li>
                  <li className="phase-details">Database: MongoDB for its scalability and flexibility with unstructured data.</li>
                  <li className="phase-details">Authentication: JWT (JSON Web Tokens) for secure user authentication.</li>
                  <li className="phase-details">Payment Integration: Stripe API for processing payments.</li>
                  <li className="phase-details">Hosting: AWS for cloud infrastructure, including EC2 instances, S3 for storage, and RDS for database management.</li>
                  <li className="phase-details">Containerization: Docker for containerizing applications to ensure consistent environments across development, testing, and production.</li>
                </ul>
              </ul>
            <li className="phase-title">3. Development</li>
              <ul>
                <li>Front End</li>
                  <ul>
                    <li className="phase-details">Wireframing and Prototyping: Created wireframes and interactive prototypes using Figma to visualize the user interface and user experience.</li>
                    <li className="phase-details">Component Development: Developed reusable React components for various parts of the application, including the product catalog, shopping cart, and checkout process.</li>
                    <li className="phase-details">Responsive Design: Ensured the application was responsive and optimized for various devices and screen sizes.</li>
                  </ul>
                <li>Back End</li>
                  <ul>
                    <li className="phase-details">API Development: Developed RESTful APIs using Express.js for handling business logic and data operations.</li>
                    <li className="phase-details">Database Schema Design: Designed a flexible and efficient schema for MongoDB to handle product information, user data, and order details.</li>
                    <li className="phase-details">Authentication: Implemented JWT-based authentication to secure API endpoints and manage user sessions.</li>
                    <li className="phase-details">Payment Integration: Integrated Stripe API for handling payments securely, including support for multiple payment methods.</li>
                  </ul>
              </ul>
            <li className="phase-title">4. Testing</li>
              <ul>
                <li className="phase-details">Unit Testing: Wrote unit tests using Jest for both front-end components and back-end services to ensure functionality at a granular level.</li>
                <li className="phase-details">Integration Testing: Conducted integration tests to verify that different modules and services worked together as expected.</li>
                <li className="phase-details">User Acceptance Testing (UAT): Performed UAT with a group of end-users to validate the system against business requirements and gather feedback.</li>
              </ul>
            <li className="phase-title">5. Deployment</li>
              <ul>
                <li className="phase-details">Continuous Integration/Continuous Deployment (CI/CD): Set up CI/CD pipelines using Jenkins to automate the building, testing, and deployment of the application.</li>
                <li className="phase-details">Containerization: Deployed applications using Docker containers to ensure consistency across different environments.</li>
                <li className="phase-details">Monitoring and Logging: Implemented monitoring and logging using AWS CloudWatch and ELK stack (Elasticsearch, Logstash, Kibana) to track application performance and troubleshoot issues.</li>
              </ul>
            <li className="phase-title">Challenges & Solutions</li>
              <ul>
                <li className="phase-details">Scalability: Ensured scalability by designing the platform with a microservices architecture and leveraging AWS infrastructure.</li>
                <li className="phase-details">Security: Addressed security concerns by implementing JWT for authentication, HTTPS for data transmission, and regular security audits.</li>
                <li className="phase-details">Performance Optimization: Improved performance by optimizing database queries, implementing caching strategies, and using a content delivery network (CDN) for static assets.</li>
              </ul>
            <li className="phase-title">Outcomes</li>
              <ul>
                <li className="phase-details">Successfully launched the e-commerce platform within the stipulated timeline and budget.</li>
                <li className="phase-details">Achieved a significant increase in online sales and customer engagement.</li>
                <li className="phase-details">Received positive feedback from users for the platform's performance, usability, and security.</li>
              </ul>
          </ol>
        </div>
    </div>
  );
};
export default CaseStudy;
