import projects from "../constants/projects.json";
import Container from "./Container";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <Container>
        <h2 className="text-[clamp(2.5rem, 5vw + 1rem, 4rem)] text-center mb-4">
          &lt;PROJECTS&gt;
        </h2>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
