export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Freenance",
      description: "This is my freenance application",
      challenge: "This was my challenge",
      solution: "This is how I solve the issue",
      technologies: ["/icons/react.svg", "/icons/typescript.svg"],
    },
    {
      id: 2,
      title: "Portfolio",
      description: "This is a portfolio project",
      challenge: "This was my challenge",
      solution: "This is how I solve the issue",
      technologies: ["/icons/react.svg", "/icons/typescript.svg"],
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h3>&lt;PROJECTS&gt;</h3>
        <div>
          {projects.map((project) => {
            return <div key={project.id}>{project.title}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
