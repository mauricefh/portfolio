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
    <section
      id="projects"
      className="p-4 bg-surface border border-muted border-2 rounded-lg"
    >
      <h3 className="font-family-display text-4xl text-primary mb-2 text-center">
        &lt;PROJECTS&gt;
      </h3>
      <div>
        {projects.map((project) => {
          return <div key={project.id}>{project.title}</div>;
        })}
      </div>
    </section>
  );
}

/*
1. Load all the image and create the fan with animation and translate
2. when the user click on the image update the active data and image

*/
