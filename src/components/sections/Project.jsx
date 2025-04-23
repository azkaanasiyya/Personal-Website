import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import ProjectCard from "../molecules/ProjectCard";
import Projects from "../../data/Projects";

function Project() {
  return (
    <div id="project" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="project-header flex flex-col items-center gap-[72px]">
          <div className="project-header-wrapper flex flex-col items-center gap-8">
            <Heading>Projects</Heading>
            <Paragraph className="text-lg text-white">
              Have a look at some of the rolled-out projects I'm proud of:
            </Paragraph>
          </div>
          <div className="project-wrapper grid grid-cols-1 gap-4">
            {Projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
