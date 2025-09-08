import React from "react";

const Footer = () => {
  return (
    <footer class="relative mt-10 hidden flex-col items-center gap-2 md:flex">
      <div class="text-sm text-gray-400">
        Made with 💖 by{" "}
        <a
          class="relative z-50 font-semibold text-primary"
          href="https://github.com/kkMihai"
        >
          Med Amine Chakroun
          <div class="absolute inset-x-0 bottom-0 z-10 mx-auto h-4 bg-primary blur-lg"></div>
        </a>
      </div>
      <p class="text-sm text-gray-400">© 2025 All rights reserved</p>
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
        {/* SVG content here */}
      </svg>
    </footer>
  );
};

export default Footer;
