// DONE REVIEWING: GITHUB COMMIT 2️⃣
import headlessUI from "@headlessui/tailwindcss"
import tailwindCSSForms from "@tailwindcss/forms"
import typographyPlugin from "@tailwindcss/typography"
import {type Config} from "tailwindcss"
import tailwindCSSAnimate from "tailwindcss-animate"
import colors from "tailwindcss/colors"
import {withUt} from "uploadthing/tw"
import typographyStyles from "./styles/typography"

export default withUt({
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./examples/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem"
      }
    },
    extend: {
      colors: {
        "tremor": {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700]
          },
          border: {DEFAULT: colors.gray[200]},
          ring: {DEFAULT: colors.gray[200]},
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white
          }
        },
        "dark-termor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950]
          },
          background: {
            muted: "#131A2B",
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300]
          },
          border: {DEFAULT: colors.gray[800]},
          ring: {DEFAULT: colors.gray[800]},
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950]
          }
        },
        "background": "var(--background)",
        "background-layer-2": "var(--background-layer-2)",
        "foreground": "var(--foreground)",
        "border": "var(--border)",
        "border-light": "var(--border-light)",
        "ring": "var(--ring)",
        "input": "var(--input)",
        "primary": {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--primary-foreground)"
        },
        "secondary": {
          DEFAULT: "var(--secondary)",
          hover: "var(--secondary-hover)",
          foreground: "var(--secondary-foreground)"
        },
        "accent": {DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)"},
        "muted": {DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)"},
        "card": {DEFAULT: "var(--card)", foreground: "var(--card-foreground)"},
        "popover": {DEFAULT: "var(--popover)", foreground: "var(--popover-foreground)"}
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"}
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-in-out",
        "accordion-up": "accordion-up 0.2s ease-in-out"
      }
    },
    screens: {
      "sm": "40rem",
      "md": "48rem",
      "lg": "64rem",
      "xl": "80rem",
      "xl-2": "88rem"
    },
    maxWidth: {
      "0": "0rem",
      "px": "0.0625rem",
      "0.5": "0.125rem",
      "1": "0.25rem",
      "1.5": "0.375rem",
      "2": "0.5rem",
      "2.5": "0.625rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
      "prose": "65ch",
      "screen-sm": "40rem",
      "screen-md": "48rem",
      "screen-lg": "64rem",
      "screen-xl": "80rem",
      "screen-xl-2": "88rem"
    },
    fontSize: {
      "xs": ["0.75rem", "1rem"],
      "sm": ["0.875rem", "1.5rem"],
      "base": ["1rem", "1.5rem"],
      "lg": ["1.125rem", "1.75rem"],
      "xl": ["1.25rem", "1.75rem"],
      "xl-2": ["1.5rem", "2rem"],
      "xl-3": ["1.875rem", "2.25rem"],
      "xl-4": ["2.25rem", "2.5rem"],
      "xl-5": ["3rem", "1"],
      "xl-6": ["3.75rem", "1"],
      "xl-7": ["4.5rem", "1"],
      "xl-8": ["6rem", "1"],
      "xl-9": ["8rem", "1"],
      "tremor-label": ["0.75rem", "1rem"],
      "tremor-default": ["0.875rem", "1.25rem"],
      "tremor-title": ["1.125rem", "1.75rem"],
      "tremor-metric": ["1.875rem", "2.25rem"]
    },
    fontWeight: {
      "thin": "100",
      "extra-light": "200",
      "light": "300",
      "normal": "400",
      "medium": "500",
      "semi-bold": "600",
      "bold": "700",
      "extra-bold": "800",
      "black": "900"
    },
    borderRadius: {
      "none": "0rem",
      "sm": "0.125rem",
      "DEFAULT": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "xl-2": "1rem",
      "xl-3": "1.5rem",
      "full": "625rem",
      "tremor-small": "0.375rem",
      "tremor-default": "0.5rem",
      "tremor-full": "625rem"
    },
    columns: {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "auto": "auto",
      "xs-3": "16rem",
      "xs-2": "18rem",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem"
    },
    boxShadow: {
      "sm": "0 0.0625rem 0.125rem 0 rgb(0 0 0 / 0.05)",
      "DEFAULT":
        "0 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1), 0 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1)",
      "md": "0 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1)",
      "lg": "0 0.625rem 0.875rem -0.1875rem rgb(0 0 0 / 0.1), 0 0.25rem 0.375rem -0.25rem rgb(0 0 0 / 0.1)",
      "xl": "0 1.25rem 1.5rem -0.25rem rgb(0 0 0 / 0.1), 0 0.5rem 0.625rem -0.375rem rgb(0 0 0 / 0.1)",
      "xl-2": "0 1.5rem 3.125rem -0.75rem rgb(0 0 0 / 0.25)",
      "inner": "inset 0 0.125rem 0.25rem 0 rgb(0 0 0 / 0.05)",
      "none": "0 0 black",
      "tremor-input": "0 0.0625rem 0.125rem 0 rgb(0 0 0 / 0.05)",
      "tremor-card":
        "0 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1), 0 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1)",
      "tremor-dropdown":
        "0 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1)",
      "dark-tremor-input": "0 0.0625rem 0.125rem 0 rgb(0 0 0 / 0.05)",
      "dark-tremor-card":
        "0 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1), 0 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1)",
      "dark-tremor-dropdown":
        "0 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1)"
    },
    dropShadow: {
      "sm": "0 0.0625rem 0.0625rem rgb(0 0 0 / 0.05)",
      "DEFAULT": [
        "0 0.0625rem 0.125rem rgb(0 0 0 / 0.1)",
        "0 0.0625rem 0.0625rem rgb(0 0 0 / 0.06)"
      ],
      "md": ["0 0.25rem 0.1875rem rgb(0 0 0 / 0.08)", "0 0.125rem 0.125rem rgb(0 0 0 / 0.06)"],
      "lg": ["0 0.625rem 0.5rem rgb(0 0 0 / 0.04)", "0 0.25rem 0.1875rem rgb(0 0 0 / 0.1)"],
      "xl": ["0 1.25rem 0.75rem rgb(0 0 0 / 0.04)", "0 0.5rem 0.25rem rgb(0 0 0 / 0.08)"],
      "xl-2": "0 1.5rem 1.5rem rgb(0 0 0 / 0.15)",
      "none": "0 0 black"
    },
    blur: {
      "none": "0rem",
      "sm": "0.25rem",
      "DEFAULT": "0.5rem",
      "md": "0.75rem",
      "lg": "1rem",
      "xl": "1.5rem",
      "xl-2": "2.5rem",
      "xl-3": "3.75rem"
    },
    backdropBlur: {
      "none": "0rem",
      "sm": "0.25rem",
      "DEFAULT": "0.5rem",
      "md": "0.75rem",
      "lg": "1rem",
      "xl": "1.5rem",
      "xl-2": "2.5rem",
      "xl-3": "3.75rem"
    },
    typography: typographyStyles
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    }
  ],
  plugins: [typographyPlugin, tailwindCSSForms, tailwindCSSAnimate, headlessUI]
} satisfies Config)
