import ProjectsGrid from "@/components/projectsGrid";
import "../style.css";
const Projects = () => {
  return (
    <div className="projects px-24 py-16">
      <h3 className="text-base font-semibold text-[#038956]">
        Explore our Projects
      </h3>
      <h4>
        Explore Our Showcase of <span>Innovative Solutions</span> and Client
        Successes
      </h4>
      <p>
        Explore how we&apos;ve helped clients in various industries achieve
        their goals and surpass expectations. Whether it&apos;s e-commerce,
        healthcare, finance, or beyond, our projects showcase a commitment to
        delivering tailored solutions
      </p>
      <ProjectsGrid />
    </div>
  );
};
export default Projects;
