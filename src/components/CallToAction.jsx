import React from "react";

const CallToAction = () => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm relative p-6"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="relative z-10">
        <div class="flex-col space-y-1.5 pb-6 mx-auto flex items-center justify-center">
          <div class="group rounded-full border border-secondary bg-card p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--fluent size-16 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              style={{ color: "var(--primary)" }}
            >
              <path
                fill="currentColor"
                d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.605 0 1.11.43 1.225 1H13.5a2.5 2.5 0 0 0-2.458 2.042A2.5 2.5 0 0 0 9 13.5v4q0 .195.029.381A4 4 0 0 1 6 14zm11.958 1.792l.042.008v-1.8C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h.514a2.5 2.5 0 0 1 2.458 2.042M5 9.25c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A5 5 0 0 1 5 14zM12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5m4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0"
              ></path>
            </svg>
          </div>
        </div>

        <div class="p-6 pt-0">
          <div class="container mx-auto flex flex-col items-center justify-center">
            <h1 class="font-sans text-2xl font-bold">Let's Work Together</h1>

            <div class="mt-5 flex w-full flex-row items-center justify-center gap-2">
              <a
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-fit gap-1"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=medaminechakroun520@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
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
                  style={{ color: "var(--primary)" }}
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
              </a>

              <a
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-fit gap-2"
                href="https://facebook.com/MedAmineChakroun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--mdi size-7"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--primary)" }}
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H8.897v-2.888h1.541V9.412c0-1.522.907-2.362 2.295-2.362c.664 0 1.36.12 1.36.12v1.497h-.766c-.756 0-.99.471-.99.953v1.137h1.688l-.27 2.888h-1.418v6.99C18.343 21.128 22 16.991 22 12z"
                  ></path>
                </svg>
              </a>

              <a
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-fit gap-2"
                href="https://github.com/MedAmineChakroun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--mdi size-7"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--primary)" }}
                >
                  <path
                    fill="currentColor"
                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.35.78 1.03.78 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.2.67.79.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
