import React from "react";

const Stats = () => {
  return (
    <div class="grid w-full grid-cols-2 gap-4 max-md:w-full lg:grid-cols-3">
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div class="flex flex-col items-center justify-center gap-1 p-4 md:p-6">
          <div class="flex items-center font-bold">
            <span class="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-4xl text-transparent md:text-5xl">
              15
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--mingcute size-6 text-primary md:size-8"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"
                ></path>
              </g>
            </svg>
          </div>
          <button data-state="closed" class="cursor-help">
            <div
              style={{ backgroundColor: "var(--secondary)" }}
              class="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--ic size-6 text-primary"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
                ></path>
              </svg>
              <span class="text-sm font-semibold text-gray-400">Projects</span>
              <div class="absolute right-0 top-0 flex size-6 -translate-y-2 translate-x-2 items-center justify-center rounded-full bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--fluent size-4 text-background"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M1 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-1.164 1.818a1.5 1.5 0 0 0-.275-.379l-4-4A1.5 1.5 0 0 0 7 8.5V12H3a2 2 0 0 1-2-2zm7.854 3.146A.5.5 0 0 0 8 8.5v6a.5.5 0 0 0 .9.3l1.35-1.8h2.25a.5.5 0 0 0 .354-.854z"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div class="flex flex-col items-center justify-center gap-1 p-4 md:p-6">
          <div class="flex items-center font-bold">
            <span class="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-4xl text-transparent md:text-5xl">
              5
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--mingcute size-6 text-primary md:size-8"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"
                ></path>
              </g>
            </svg>
          </div>
          <button
            data-state="instant-open"
            class="cursor-default"
            aria-describedby="radix-:r1:"
          >
            <div
              style={{ backgroundColor: "var(--secondary)" }}
              class="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--fluent size-6 text-primary"
                width="2em"
                height="2em"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M6.153 7.008A1.5 1.5 0 0 1 7.5 8.5c0 .771-.47 1.409-1.102 1.83c-.635.424-1.485.67-2.398.67s-1.763-.246-2.398-.67C.969 9.91.5 9.271.5 8.5A1.5 1.5 0 0 1 2 7h4zM10.003 7a1.5 1.5 0 0 1 1.5 1.5c0 .695-.432 1.211-.983 1.528c-.548.315-1.265.472-2.017.472q-.38-.001-.741-.056c.433-.512.739-1.166.739-1.944A2.5 2.5 0 0 0 7.997 7zM4.002 1.496A2.253 2.253 0 1 1 4 6.001a2.253 2.253 0 0 1 0-4.505m4.75 1.001a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5"
                ></path>
              </svg>
              <span class="text-sm font-semibold text-gray-400">
                Techs mastered
              </span>
            </div>
          </button>
        </div>
      </div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div class="flex flex-col items-center justify-center gap-1 p-4 md:p-6">
          <div class="flex items-center font-bold">
            <span class="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-5xl text-transparent md:text-5xl">
              3
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--mingcute size-6 text-primary md:size-8"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"
                ></path>
              </g>
            </svg>
          </div>
          <button
            data-state="delayed-open"
            class="cursor-default"
            aria-describedby="radix-:r2:"
          >
            <div
              style={{ backgroundColor: "var(--secondary)" }}
              class="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--solar size-6 text-primary"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 8h1a3 3 0 0 1 0 6h-1v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3zM6 5v3M10 5v3"
                ></path>
              </svg>
              <span class="text-sm font-semibold text-gray-400">
                Pro Experiences
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
