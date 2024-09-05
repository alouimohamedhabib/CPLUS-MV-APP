import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      maxHeight: {
        'screen-h-header': 'calc(100vh - 4rem)',
      },
      colors: {
        mainGreen: "rgb(0 102 92)"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
