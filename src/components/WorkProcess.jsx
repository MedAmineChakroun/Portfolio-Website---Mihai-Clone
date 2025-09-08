import React from "react";

const WorkProcess = () => {
  const steps = [
    {
      number: "#1",
      title: "Project Brief",
      description: "We will discuss your project and its goals.",
      icon: "👥",
      color: "var(--primary)",
    },
    {
      number: "#2",
      title: "Design & Develop",
      description:
        "I will design and develop your website according to your needs.",
      icon: "</>",
      color: "var(--blue-accent)",
    },
    {
      number: "#3",
      title: "Testing & Review",
      description:
        "I will let you test the website and make any changes if needed.",
      icon: "🛠️",
      color: "var(--green-accent)",
    },
    {
      number: "#4",
      title: "Launch",
      description:
        "I will give you the source code and help you with the launch.",
      icon: "🚀",
      color: "var(--card-bg)",
    },
  ];

  return (
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--uis size-7 text-primary"
            style={{ color: "var(--primary)" }}
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.5 6H6.7C8.2 4.7 10 4 12 4c.3 0 .6 0 .9.1c.5.1 1-.3 1.1-.9c.1-.5-.3-1-.9-1.1c-.4-.1-.7-.1-1.1-.1c-2.4 0-4.7.9-6.5 2.4V3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1M7 14.5c-.6 0-1 .4-1 1v1.8C4.7 15.8 4 14 4 12c0-.3 0-.6.1-.9c.1-.5-.3-1-.9-1.1c-.5-.1-1 .3-1.1.9c-.1.4-.1.7-.1 1.1c0 2.4.9 4.7 2.4 6.5H3c-.6 0-1 .4-1 1s.4 1 1 1h4c.3 0 .6-.2.8-.4c0-.1.1-.2.1-.3v-4.3c.1-.6-.3-1-.9-1m14-9c.6 0 1-.4 1-1s-.4-1-1-1h-4.2c-.1 0-.2.1-.3.1c-.1.1-.2.1-.2.2s-.1.2-.1.2v4.3c0 .6.4 1 1 1s1-.4 1-1V6.7c1.3 1.4 2 3.3 2 5.3c0 .3 0 .6-.1.9c-.1.5.3 1 .9 1.1h.1c.5 0 .9-.4 1-.9c0-.4.1-.7.1-1.1c0-2.4-.9-4.7-2.4-6.5zm-.7 11l-.3-.3c-.1-.1-.2-.1-.3-.1h-4.2c-.6 0-1 .4-1 1s.4 1 1 1h1.8c-1.4 1.3-3.3 2-5.3 2c-.3 0-.6 0-.9-.1c-.5-.1-1 .3-1.1.9s.3 1 .9 1.1c.4 0 .7.1 1.1.1c2.4 0 4.7-.9 6.5-2.4V21c0 .6.4 1 1 1s1-.4 1-1v-4c0-.2-.1-.4-.2-.5"
            ></path>
          </svg>
          Work Process
        </h3>
        <p class="text-sm text-muted-foreground text-gray-400">
          The work process explained in 4 simple steps
        </p>
      </div>
      <div class="p-6 pt-0">
        <div class="grid grid-cols-1 gap-4">
          <div class="rounded-lg border text-card-foreground shadow-sm group h-fit overflow-hidden bg-background">
            <div
              class="relative flex flex-row gap-4 p-3 transition-all duration-300"
              style={{ backgroundColor: "#0d0c0d" }}
            >
              <div
                class="flex h-full items-center gap-1 rounded-lg border border-accent bg-secondary/50 p-1 transition-all duration-300 group-hover:rounded-l group-hover:border-r-transparent md:group-hover:scale-150 md:group-hover:rounded-r-none"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--healthicons size-10 text-primary"
                  style={{ color: "var(--primary)" }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    d="M24 12.042A6.04 6.04 0 0 0 17.958 6h-5.916a6.042 6.042 0 1 0 0 12.083H13.2V21S24 19.542 24 12.042M18.5 28c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4m-4 6C11.663 34 6 35.43 6 38.267V42h17v-3.733C23 35.429 17.337 34 14.5 34m19-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.837 0-8.5 1.43-8.5 4.267V42h17v-3.733C42 35.429 36.337 34 33.5 34M32.042 7A6.04 6.04 0 0 0 26 13.042c0 7.5 9.6 8.958 9.6 8.958v-2.917h.358a6.042 6.042 0 1 0 0-12.083z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1 transition-all duration-300 md:group-hover:translate-x-3">
                <h1 class="font-bold">Project Brief</h1>
                <p class="text-sm font-semibold text-gray-400">
                  We will discuss your project and its goals.
                </p>
              </div>
              <div
                class="absolute right-2 top-2 rounded-xl bg-secondary p-1 font-black text-gray-400 transition duration-300 md:group-hover:-translate-y-10 md:group-hover:translate-x-10 md:group-hover:opacity-0"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                #1
              </div>
            </div>
          </div>
          <div class="rounded-lg border text-card-foreground shadow-sm group h-fit overflow-hidden bg-background">
            <div
              class="relative flex flex-row gap-4 p-3 transition-all duration-300"
              style={{ backgroundColor: "#0d0c0d" }}
            >
              <div
                class="flex h-full items-center gap-1 rounded-lg border border-accent bg-secondary/50 p-1 transition-all duration-300 group-hover:rounded-l group-hover:border-r-transparent md:group-hover:scale-150 md:group-hover:rounded-r-none"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--mingcute size-10 text-primary"
                  style={{ color: "var(--primary)" }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="flex flex-col gap-1 transition-all duration-300 md:group-hover:translate-x-3">
                <h1 class="font-bold">Design &amp; Develop</h1>
                <p class="text-sm font-semibold text-gray-400">
                  I will design and develop your website according to your
                  needs.
                </p>
              </div>
              <div
                class="absolute right-2 top-2 rounded-xl bg-secondary p-1 font-black text-gray-400 transition duration-300 md:group-hover:-translate-y-10 md:group-hover:translate-x-10 md:group-hover:opacity-0"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                #2
              </div>
            </div>
          </div>
          <div class="rounded-lg border text-card-foreground shadow-sm group h-fit overflow-hidden bg-background">
            <div
              class="relative flex flex-row gap-4 p-3 transition-all duration-300"
              style={{ backgroundColor: "#0d0c0d" }}
            >
              <div
                class="flex h-full items-center gap-1 rounded-lg border border-accent bg-secondary/50 p-1 transition-all duration-300 group-hover:rounded-l group-hover:border-r-transparent md:group-hover:scale-150 md:group-hover:rounded-r-none"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--majesticons size-10 text-primary"
                  style={{ color: "var(--primary)" }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 0 0 0 2h1v13a5 5 0 0 0 10 0V4h1a1 1 0 1 0 0-2zm3 5V4h6v3zm4.708 5.708a1 1 0 0 1-1.414 0h-.001a1 1 0 0 1 1.414-1.415a1 1 0 0 1 0 1.415zm-3.414 4a1 1 0 1 0 1.414-1.414v-.001a1 1 0 0 0-1.415 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1 transition-all duration-300 md:group-hover:translate-x-3">
                <h1 class="font-bold">Testing &amp; Review</h1>
                <p class="text-sm font-semibold text-gray-400">
                  I will let you test the website and make any changes if
                  needed.
                </p>
              </div>
              <div
                class="absolute right-2 top-2 rounded-xl bg-secondary p-1 font-black text-gray-400 transition duration-300 md:group-hover:-translate-y-10 md:group-hover:translate-x-10 md:group-hover:opacity-0"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                #3
              </div>
            </div>
          </div>
          <div class="rounded-lg border text-card-foreground shadow-sm group h-fit overflow-hidden bg-background">
            <div
              class="relative flex flex-row gap-4 p-3 transition-all duration-300"
              style={{ backgroundColor: "#0d0c0d" }}
            >
              <div
                class="flex h-full items-center gap-1 rounded-lg border border-accent bg-secondary/50 p-1 transition-all duration-300 group-hover:rounded-l group-hover:border-r-transparent md:group-hover:scale-150 md:group-hover:rounded-r-none"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--heroicons size-10 text-primary"
                  style={{ color: "var(--primary)" }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M9.315 7.584A15.72 15.72 0 0 1 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436q.083.52.084 1.064a6.75 6.75 0 0 1-6.75 6.75a.75.75 0 0 1-.75-.75v-4.131l-.027-.021A15.8 15.8 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75a6.75 6.75 0 0 1 7.815-6.666M15 6.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203a5.24 5.24 0 0 0-2.05 5.022a.75.75 0 0 0 .625.627q.398.061.812.062a5.24 5.24 0 0 0 4.21-2.113a.75.75 0 1 0-1.202-.897a3.74 3.74 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008"></path>
                  </g>
                </svg>
              </div>
              <div class="flex flex-col gap-1 transition-all duration-300 md:group-hover:translate-x-3">
                <h1 class="font-bold">Launch</h1>
                <p class="text-sm font-semibold text-gray-400">
                  I will give you the source code and help you with the launch.
                </p>
              </div>
              <div
                class="absolute right-2 top-2 rounded-xl bg-secondary p-1 font-black text-gray-400 transition duration-300 md:group-hover:-translate-y-10 md:group-hover:translate-x-10 md:group-hover:opacity-0"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                #4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
