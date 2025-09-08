import React from "react";

const TechStack = () => {
  const technologies = [
    {
      name: "Angular",
      version: "Version 16+",
      icon: "/assets/angularpink.png",
      color: "var(--secondary)",
      link: "https://angular.io",
    },
    {
      name: "Spring Boot",
      version: "Version 3.1+",
      icon: "/assets/spring.png",
      color: "var(--secondary)",
      link: "https://spring.io/projects/spring-boot",
    },
    {
      name: ".NET",
      version: "Version 7.0",
      icon: "/assets/.net.png",
      color: "var(--secondary)",
      link: "https://dotnet.microsoft.com",
    },
    {
      name: "Node.JS",
      version: "Version 20.17.0",
      icon: "/assets/angularpink.png",
      color: "var(--secondary)",
      link: "https://nodejs.org",
    },
  ];

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--fa6-solid mr-1 size-7 text-primary"
            width="1.13em"
            height="1em"
            viewBox="0 0 576 512"
            style={{ color: "var(--primary)" }}
          >
            <path
              fill="currentColor"
              d="M248 0h-40c-26.5 0-48 21.5-48 48v112c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zM64 256c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80zm288 256h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80h-40c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2v160c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512"
            ></path>
          </svg>
          My Tech Stack
        </h3>
        <p className="text-sm text-muted-foreground text-gray-400">
          My favorite tech stack I use on my projects
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="grid grid-cols-1 gap-4 max-md:w-full 2xl:grid-cols-2">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              className="group relative flex cursor-pointer flex-row items-center gap-4 rounded-lg bg-secondary p-4 transition hover:bg-secondary/80"
              style={{ backgroundColor: "#0d0c0d", borderRadius: "12px" }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 "
                style={{ backgroundColor: tech.color, borderRadius: "8px" }}
              >
                <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-white">
                  {tech.name}
                </h1>
                <p className="text-xs text-gray-400">{tech.version}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--eva absolute right-4 size-6 text-primary transition duration-300 group-hover:scale-110"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                style={{ color: "var(--primary)" }}
              >
                <path
                  fill="currentColor"
                  d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"
                ></path>
                <path
                  fill="currentColor"
                  d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2"
                ></path>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
