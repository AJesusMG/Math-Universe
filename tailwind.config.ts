import { ThemeColors, nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.hide-children > *': {
          display: 'none',
        },
      })
    }),

    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              50: "#ffe5ec",
              100: "#ffccd3",
              200: "#ff99a7",
              300: "#ff667b",
              400: "#ff334e",
              500: "#FF204E", // Primary color updated
              600: "#cc1a3e",
              700: "#99152f",
              800: "#66101f",
              900: "#330810",
              DEFAULT: "#FF204E", // Primary color updated
            },
            secondary: {
              DEFAULT: "#A0153E", // Secondary color updated
            },
            accent: "#5D0E41", // Accent color updated
            background: {
              DEFAULT: "#FFFFFF", // Background color added
              50: "#f8f9fa",
              100: "#f1f3f5",
              200: "#e9ecef",
              300: "#dee2e6",
              400: "#ced4da",
              500: "#adb5bd",
              600: "#6c757d",
              700: "#495057",
              800: "#343a40",
              900: "#212529",
            },
            text: {
              DEFAULT: "#11181C", // Text color added
              50: "#f1f3f5",
              100: "#e9ecef",
              200: "#dee2e6",
              300: "#ced4da",
              400: "#adb5bd",
              500: "#6c757d",
              600: "#495057",
              700: "#343a40",
              800: "#212529",
              900: "#11181C",
            },
          } as Partial<ThemeColors & { accent: string, background: object, text: object }>,
        },
        light: {
          colors: {
            primary: {
              50: "#ffe5ec",
              100: "#ffccd3",
              200: "#ff99a7",
              300: "#ff667b",
              400: "#ff334e",
              500: "#FF204E", // Primary color updated
              600: "#cc1a3e",
              700: "#99152f",
              800: "#66101f",
              900: "#330810",
              DEFAULT: "#FF204E", // Primary color updated
            },
            secondary: {
              DEFAULT: "#A0153E", // Secondary color updated
            },
            accent: "#5D0E41", // Accent color updated
            background: {
              DEFAULT: "#FFFFFF", // Background color added
              50: "#f8f9fa",
              100: "#f1f3f5",
              200: "#e9ecef",
              300: "#dee2e6",
              400: "#ced4da",
              500: "#adb5bd",
              600: "#6c757d",
              700: "#495057",
              800: "#343a40",
              900: "#212529",
            },
            text: {
              DEFAULT: "#11181C", // Text color added
              50: "#f1f3f5",
              100: "#e9ecef",
              200: "#dee2e6",
              300: "#ced4da",
              400: "#adb5bd",
              500: "#6c757d",
              600: "#495057",
              700: "#343a40",
              800: "#212529",
              900: "#11181C",
            },
          } as Partial<ThemeColors & { accent: string, background: object, text: object }>,
        }
      }
    })
  ],
};
export default config;
