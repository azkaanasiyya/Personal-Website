import Paragraph from "../atoms/Paragraph";
import LinkText from "../atoms/LinkText";

function ProjectCard({ image, title, description, link }) {
  return (
    <div className="project-card flex items-center gap-6 rounded-2xl bg-transparent border border-[#FFFFFF1A] p-8">
      <div className="project-image w-1/2">
        <img src={image} alt={title} className="w-auto rounded-xl" />
      </div>
      <div className="project-content flex w-1/2 flex-col justify-between text-left">
        <h3 className="mb-4 text-2xl font-bold text-neutral-50">{title}</h3>
        <Paragraph className="mb-4">{description}</Paragraph>
        <LinkText href={link}>View project</LinkText>
      </div>
    </div>
  );
}

export default ProjectCard;
