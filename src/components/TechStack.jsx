import React from "react";

const TechStack = () => {
  const technologies = [
    {
      name: "Next.JS",
      version: "Version 15+",
      icon: "N",
      color: "var(--card-bg)",
      link: "https://nextjs.org",
    },
    {
      name: "Tailwind CSS",
      version: "",
      icon: "~",
      color: "var(--blue-accent)",
    },
    {
      name: "ShadCN/UI",
      version: "",
      icon: "⚡",
      color: "var(--dark-bg)",
    },
    {
      name: "Node.JS",
      version: "Version 20.17.0",
      icon: "⬢",
      color: "var(--green-accent)",
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
            class="iconify iconify--fa6-solid mr-1 size-7 text-primary"
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
        <p class="text-sm text-muted-foreground">
          My favorite tech stack I use on my projects
        </p>
      </div>
      <div class="p-6 pt-0">
        <div class="grid grid-cols-1 gap-2 max-md:w-full 2xl:grid-cols-2">
          <button
            type="button"
            class="group relative flex cursor-pointer flex-row items-center gap-2 rounded-2xl bg-background/90 p-2 transition hover:bg-background/70"
          >
            <div class="flex flex-row items-center gap-1 rounded-xl border border-secondary bg-secondary/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--ri size-8 text-primary"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ color: "var(--primary)" }}
              >
                <path
                  fill="currentColor"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col items-start gap-1">
              <h1 class="font-semibold text-neutral-300">Next.JS</h1>
              <p class="text-left text-[0.7rem] font-semibold text-muted-foreground lg:text-xs">
                Version 15+
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--eva absolute right-2 size-6 text-primary transition duration-300 group-hover:scale-110"
              width="1em"
              height="1em"
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
          </button>
          <button
            type="button"
            class="group relative flex cursor-pointer flex-row items-center gap-2 rounded-2xl bg-background/90 p-2 transition hover:bg-background/70"
          >
            <div class="flex flex-row items-center gap-1 rounded-xl border border-secondary bg-secondary/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--mdi size-8 text-primary"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ color: "var(--primary)" }}
              >
                <path
                  fill="currentColor"
                  d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col items-start gap-1">
              <h1 class="font-semibold text-neutral-300">Tailwind CSS</h1>
              <p class="text-left text-[0.7rem] font-semibold text-muted-foreground lg:text-xs"></p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--eva absolute right-2 size-6 text-primary transition duration-300 group-hover:scale-110"
              width="1em"
              height="1em"
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
          </button>
          <button
            type="button"
            class="group relative flex cursor-pointer flex-row items-center gap-2 rounded-2xl bg-background/90 p-2 transition hover:bg-background/70"
          >
            <div class="flex flex-row items-center gap-1 rounded-xl border border-secondary bg-secondary/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--simple-icons size-8 text-primary"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ color: "var(--primary)" }}
              >
                <path
                  fill="currentColor"
                  d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col items-start gap-1">
              <h1 class="font-semibold text-neutral-300">ShadCN/UI</h1>
              <p class="text-left text-[0.7rem] font-semibold text-muted-foreground lg:text-xs"></p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--eva absolute right-2 size-6 text-primary transition duration-300 group-hover:scale-110"
              width="1em"
              height="1em"
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
          </button>
          <button
            type="button"
            class="group relative flex cursor-pointer flex-row items-center gap-2 rounded-2xl bg-background/90 p-2 transition hover:bg-background/70"
          >
            <div class="flex flex-row items-center gap-1 rounded-xl border border-secondary bg-secondary/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--mdi size-8 text-primary"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ color: "var(--primary)" }}
              >
                <path
                  fill="currentColor"
                  d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47q.36.21.78.21t.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col items-start gap-1">
              <h1 class="font-semibold text-neutral-300">Node.JS</h1>
              <p class="text-left text-[0.7rem] font-semibold text-muted-foreground lg:text-xs">
                Version 20.17.0
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--eva absolute right-2 size-6 text-primary transition duration-300 group-hover:scale-110"
              width="1em"
              height="1em"
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
