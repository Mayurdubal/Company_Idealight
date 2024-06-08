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
        <h2>{projectData[projectId - 1]?.title}</h2>
        <p>{projectData[projectId - 1]?.subheading}</p>
      </span>
      <div>
        <div className="flex flex-row">
          <span className="overview section">
            <h4>Project Overview</h4>
            <p>{projectData[projectId - 1]?.project_overview}</p>
          </span>
          <span className="objective section">
            <h4>Objective</h4>
            {projectData[projectId - 1]?.objective.map((objective, index) => (
              <div key={index} className="objective-card">
                <li>
                  <strong>{objective.split(":")[0]}:</strong>{" "}
                  {objective.split(":")[1]}
                </li>
              </div>
            ))}
          </span>
        </div>
      </div>

      <div className="project-phases">
        <h3>Project Phases</h3>
        <ol>
          <li className="phase-title">1. Requirements Gathering</li>
          <ul>
            {projectData[projectId - 1]?.requirements_gathering?.map(
              (requirement, index) => (
                <li key={index} className="phase-details">
                  {requirement}
                </li>
              )
            )}
          </ul>

          <li className="phase-title">2. System Architecture Design</li>
          <ul>
            <li>
              Architecture Selection:
              {
                projectData[projectId - 1]?.system_architecture_design[0]
                  ?.architecture_selection
              }
            </li>
            <li>Technology Stack:</li>
            <ul>
              {projectData[
                projectId - 1
              ]?.system_architecture_design[0]?.technology_stack.map(
                (tech, index) => (
                  <li key={index} className="phase-details">
                    {tech}
                  </li>
                )
              )}
            </ul>
          </ul>

          <li className="phase-title">3. Development</li>
          <ul>
            <li>Front End</li>
            <ul>
              {projectData[projectId - 1]?.development[0]?.front_end.map(
                (front, index) => (
                  <li key={index} className="phase-details">
                    {front}
                  </li>
                )
              )}
            </ul>
            <li>Back End</li>
            <ul>
              {projectData[projectId - 1]?.development[0]?.back_end.map(
                (back, index) => (
                  <li key={index} className="phase-details">
                    {back}
                  </li>
                )
              )}
            </ul>
          </ul>

          <li className="phase-title">4. Testing</li>
          <ul>
            {projectData[projectId - 1]?.testing?.map((test, index) => (
              <li key={index} className="phase-details">
                {test}
              </li>
            ))}
          </ul>

          <li className="phase-title">5. Deployment</li>
          <ul>
            {projectData[projectId - 1]?.deployment?.map((deploy, index) => (
              <li key={index} className="phase-details">
                {deploy}
              </li>
            ))}
          </ul>

          <li className="phase-title">Challenges & Solutions</li>
          <ul>
            {projectData[projectId - 1]?.challenges?.map((challenge, index) => (
              <li key={index} className="phase-details">
                {challenge}
              </li>
            ))}
          </ul>

          <li className="phase-title">Outcomes</li>
          <ul>
            {projectData[projectId - 1]?.outcomes?.map((result, index) => (
              <li key={index} className="phase-details">
                {result}
              </li>
            ))}
          </ul>
        </ol>
      </div>
    </div>
  );
};
export default CaseStudy;
