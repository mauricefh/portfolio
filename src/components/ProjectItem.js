import Link from "next/link";
import Pill from "./Pill";
import ProjectGallery from "./ProjectGallery";
import GitHubButton from "./GitHubButton";
import DemoButton from "./DemoButton";

export default function ProjectItem({ project }) {
  const {
    title,
    description,
    challenge,
    solution,
    techs,
    github,
    demo,
    medias,
  } = project;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 shadow-xl border rounded-xl p-2">
      <div className="md:w-1/3 w-full shadow-lg">
        <ProjectGallery medias={medias} />
      </div>

      <div className="w-full p-2">
        <div className="title-description-container mb-2">
          <h3 className="text-xl">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="challenge-container mb-2">
          <h3 className="text-xl">Challenge</h3>
          <p>{challenge}</p>
        </div>
        <div className="solution-container mb-2">
          <h3 className="text-xl">Solution</h3>
          <p>{solution}</p>
        </div>
        <div className="flex gap-2 mb-2">
          {techs.map((tech) => (
            <Pill key={tech.text} text={tech.text} variant={tech.color} />
          ))}
        </div>
        <div className="flex jusjify-end gap-2 mb-2">
          <GitHubButton link={github} />
          <DemoButton link={demo} />
        </div>
      </div>
    </div>
  );
}
