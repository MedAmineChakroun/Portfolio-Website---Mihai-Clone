import React from "react";

const Services = () => {
  const services = [
    "SEO Optimization",
    "Hosting Guide",
    "Web Security",
    "Website Rework",
    "Web Development",
  ];

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xl mx-auto p-6"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div class="flex flex-col space-y-1.5">
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
                d="m16.24 11.51l1.57-1.57l-3.75-3.75l-1.57 1.57l-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13l-4.6 4.61q-.15.15-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l4.62-4.62l4.13 4.13c1.32 1.32 2.76.07 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31l-.47.49a.996.996 0 1 0 1.41 1.41l.48-.48l1.45 1.45zm7.88 7.89l-4.13-4.13l1.9-1.9l1.45 1.45l-.48.48a.996.996 0 1 0 1.41 1.41l.48-.48l1.27 1.27zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83l3.75 3.75z"
              ></path>
            </svg>
            Services
          </h3>
          <p class="text-sm text-muted-foreground text-gray-400">
            My services are tailored to your needs and budget
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
