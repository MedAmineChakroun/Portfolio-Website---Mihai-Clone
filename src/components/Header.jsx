import React from "react";

const Header = () => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="p-6 pt-0 mt-5">
        <div className="flex flex-row items-center">
          <img
            alt="Author"
            loading="eager"
            width="100"
            height="100"
            decoding="async"
            className="rounded-2xl"
            src="assets/1703248186843.jpeg"
            style={{ color: "transparent" }}
          />
          <div className="ml-4 flex flex-col gap-y-1">
            <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mb-auto flex w-fit items-center justify-center gap-1 bg-green-500/20 text-green-500">
              <span className="font-semibold">Available To Work</span>
            </div>
            <h1
              className="text-2xl font-bold text-primary"
              style={{ color: "var(--primary)" }}
            >
              Med Amine chakroun
            </h1>
            <div className="font-semibold text-gray-400">
              <div className="flex flex-col gap-1 md:flex-row md:items-center">
                I'm a{" "}
                <span
                  className="font-bold text-primary"
                  style={{ color: "var(--primary)" }}
                >
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 flex max-w-[50vh] flex-wrap gap-2 rounded-xl bg-background p-3">
          <div class="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--mingcute size-6 text-primary"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M18.667 1.547a1 1 0 1 0-1.334 1.49A8 8 0 0 1 12.011 17h-.022a7.99 7.99 0 0 1-6.656-3.577a1 1 0 0 0-1.666 1.107A10 10 0 0 0 11 18.95V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1.05c5.053-.501 9-4.765 9-9.95a9.98 9.98 0 0 0-3.333-7.453M12 2a7 7 0 1 0 0 14a7 7 0 0 0 0-14"
                ></path>
              </g>
            </svg>
            <p class="text-sm font-semibold text-gray-400">
              English &amp; Romanian
            </p>
          </div>
          <div class="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--solar size-6 text-primary"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <path
                fill="currentColor"
                d="m19.184 7.805l-2.965-2.967c-2.027-2.03-3.04-3.043-4.129-2.803s-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2 2 0 0 1-.36.332c-.296.213-.664.314-1.4.517c-1.66.458-2.491.687-2.804 1.23a1.53 1.53 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48l1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84c.265 0 .526-.068.757-.2c.548-.313.778-1.149 1.239-2.822c.202-.735.303-1.102.515-1.399q.14-.194.322-.352c.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586c.235-1.086-.77-2.093-2.783-4.107"
              ></path>
            </svg>
            <p class="text-sm font-semibold text-gray-400">Romania</p>
          </div>
          <div class="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--stash size-6 text-primary"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <path
                fill="currentColor"
                d="M17.5 13a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m.5 2.5v1.793l.854.853a.5.5 0 0 1-.708.708l-1-1A.5.5 0 0 1 17 17.5v-2a.5.5 0 0 1 1 0"
              ></path>
              <path
                fill="currentColor"
                d="M2 11.75a9.75 9.75 0 0 0 9.75 9.75q.309 0 .611-.019A6.47 6.47 0 0 1 11 17.5v2.337c-.73-.311-1.478-1.072-2.124-2.283a11.3 11.3 0 0 1-.904-2.322c.943.14 1.963.23 3.028.258v2.01c0-1.58.563-3.027 1.5-4.154V9.511c1.215.034 2.35.15 3.358.33c.065.44.108.888.129 1.336q.721-.173 1.493-.177a15 15 0 0 0-.065-.803q.24.07.462.143c.77.257 1.34.546 1.701.831c.13.102.22.192.282.27c.587.23 1.132.54 1.621.92q.02-.303.019-.611C21.5 6.365 17.135 2 11.75 2S2 6.365 2 11.75m3.149-2.833a9 9 0 0 0-1.33.552a8.27 8.27 0 0 1 4.266-5.112q-.288.424-.532.883c-.523.981-.935 2.126-1.202 3.338q-.641.152-1.202.34m3.727-2.971C9.522 4.736 10.27 3.974 11 3.663V8.01a25 25 0 0 0-3.028.258a11.3 11.3 0 0 1 .904-2.322M7.642 9.84A23 23 0 0 1 11 9.511v4.478a23 23 0 0 1-3.358-.33A13 13 0 0 1 7.5 11.75c0-.639.05-1.28.142-1.909m-3.823 4.19c.398.207.847.39 1.33.552q.56.187 1.202.34c.267 1.211.679 2.356 1.202 3.337q.243.459.532.883a8.27 8.27 0 0 1-4.266-5.112m1.804-.871c-.77-.257-1.34-.546-1.702-.831c-.37-.292-.421-.493-.421-.579s.052-.287.421-.579c.362-.285.932-.574 1.702-.83q.222-.075.462-.144a14.4 14.4 0 0 0 0 3.106q-.24-.07-.462-.143m10.324-7.92a10 10 0 0 0-.532-.883a8.27 8.27 0 0 1 4.266 5.112a9 9 0 0 0-1.33-.552a14 14 0 0 0-1.202-.34c-.267-1.211-.679-2.356-1.202-3.337M12.5 8.01V3.663c.73.311 1.478 1.072 2.124 2.283c.366.687.673 1.476.904 2.322c-.943-.14-1.963-.23-3.028-.258"
              ></path>
            </svg>
            <p class="text-sm font-semibold text-gray-400">UTC+3</p>
          </div>
          <div class="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--solar size-6 text-primary"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M2.25 11.88c-.01.177.015.39.065.818l.401 3.428A5.515 5.515 0 0 0 8.193 21h3.614a5.52 5.52 0 0 0 5.028-3.25H19a3.75 3.75 0 1 0 0-7.5h-2.279a2 2 0 0 0-.618-.22c-.174-.03-.39-.03-.82-.03H4.717c-.43 0-.645 0-.819.03a2 2 0 0 0-1.646 1.85m15.487-.13q.008.065.012.13c.01.177-.014.39-.064.818l-.401 3.428l-.016.124H19a2.25 2.25 0 0 0 0-4.5z"></path>
                <path
                  d="M10.53 1.47a.75.75 0 0 1 0 1.06a.666.666 0 0 0 0 .94a2.164 2.164 0 0 1 0 3.06a.75.75 0 0 1-1.06-1.06c.26-.26.26-.68 0-.94a2.164 2.164 0 0 1 0-3.06a.75.75 0 0 1 1.06 0m-4.5 1.5a.75.75 0 0 1 0 1.06l-.116.116a.69.69 0 0 0-.064.904a2.19 2.19 0 0 1-.203 2.864l-.116.116A.75.75 0 0 1 4.47 6.97l.116-.116a.69.69 0 0 0 .064-.904a2.19 2.19 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0m9.5 0a.75.75 0 0 1 0 1.06l-.116.116a.69.69 0 0 0-.064.904a2.19 2.19 0 0 1-.203 2.864l-.117.116a.75.75 0 1 1-1.06-1.06l.116-.116a.69.69 0 0 0 .064-.904a2.19 2.19 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0"
                  opacity=".5"
                ></path>
              </g>
            </svg>
            <p class="text-sm font-semibold text-gray-400">Coffee Addict</p>
          </div>
          <div class="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--ic size-6 text-primary"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <path
                fill="currentColor"
                d="m14.16 10.4l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63"
              ></path>
              <path
                fill="currentColor"
                d="M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3M19 9h-2V7h2z"
              ></path>
            </svg>
            <p class="text-sm font-semibold text-gray-400">Freelancer</p>
          </div>
          <div class="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--lets-icons size-6 text-primary"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--primary)" }}
            >
              <g fill="none">
                <path
                  fill="currentColor"
                  d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9m0 9c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M7 3v3m10-3v3"
                ></path>
              </g>
            </svg>
            <p class="text-sm font-semibold text-gray-400">23y/o</p>
          </div>
        </div>

        <div class="mt-5 flex flex-row items-center gap-2">
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gap-1"
            style={{ background: "var(--primary)", color: "var(--card-bg)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--solar size-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ color: "var(--card-bg)" }}
            >
              <path
                fill="currentColor"
                d="M2 11.25C2 8.35 4.015 6 6.5 6S11 8.35 11 11.25V20H4.233C3 20 2 18.834 2 17.395z"
                opacity=".5"
              ></path>
              <path
                fill="currentColor"
                d="M11 11.25V20h8.793C21.012 20 22 18.847 22 17.425V11.25C22 8.35 19.985 6 17.5 6h-11C8.985 6 11 8.35 11 11.25"
                opacity=".8"
              ></path>
              <path
                fill="currentColor"
                d="M9.5 20v2a.75.75 0 0 0 1.5 0v-2zm5.5 0h-1.5v2a.75.75 0 0 0 1.5 0z"
              ></path>
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m13.135-9.415l.256-.052a2.2 2.2 0 0 1 1.24.115c.69.277 1.446.328 2.165.148l.061-.015c.524-.131.893-.618.893-1.178v-2.13c0-.738-.664-1.282-1.355-1.109c-.396.1-.812.071-1.193-.081l-.073-.03a3.5 3.5 0 0 0-2-.185l-.449.09c-.54.108-.93.6-.93 1.17v6.953c0 .397.31.719.692.719a.706.706 0 0 0 .693-.72z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Hire Me
          </button>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full gap-2"
            style={{ background: "var(--secondary)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--mdi size-7"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              ></path>
            </svg>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
