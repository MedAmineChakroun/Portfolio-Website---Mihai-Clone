import React from "react";

const Projects = () => {
  const projects = [
    {
      image: "https://dummyimage.com/300x200/1a1a1a/10b981?text=Project+1",
      title: "E-commerce Platform",
    },
    {
      image: "https://dummyimage.com/300x200/1a1a1a/f59e0b?text=Project+2",
      title: "Portfolio Website",
    },
  ];

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div class="flex flex-col space-y-1.5  pb-3">
        <h3 class="text-2xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ic size-7 text-primary"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{ color: "var(--primary)" }}
          >
            <path
              fill="currentColor"
              d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
            ></path>
          </svg>
          Projects
        </h3>
        <p class="text-sm text-muted-foreground text-gray-400">
          Here are some of the projects I have worked on
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-24 object-cover rounded-lg mb-2 group-hover:opacity-80 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-gray-300">{project.title}</p>
          </div>
        ))}
      </div>

      <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{ color: "var(--primary)" }}
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
        View All Projects
      </button>
    </div>
  );
};

export default Projects;
