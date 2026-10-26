/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        // Design tokens — driven by CSS variables in src/styles/globals.css.
        // This lets re-theming work by changing only the 4 --brand lines.
        border: 'hsl(var(--border))',
        input: 'hsl(var(--border))',
        ring: 'hsl(var(--brand))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        nav: {
          // DEFAULT is the text-safe shade (WCAG AA); nav-light stays decorative.
          DEFAULT: 'hsl(var(--brand-text))',
          light: 'hsl(var(--brand-light))',
        },
        primary: {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--background))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(var(--background))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Theme-independent "screening room" palette for the homepage hero,
        // trailer band and closing frame (tokens live in globals.css).
        cinema: {
          bg: 'hsl(var(--cinema-bg) / <alpha-value>)',
          paper: 'hsl(var(--cinema-paper) / <alpha-value>)',
          ink: 'hsl(var(--cinema-ink) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius, 0.5rem)',
        md: 'calc(var(--radius, 0.5rem) - 2px)',
        sm: 'calc(var(--radius, 0.5rem) - 4px)',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: [
          '"Cormorant Garamond"',
          'ui-serif',
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          'Georgia',
          'serif',
        ],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.nav.DEFAULT'),
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': { textDecoration: 'underline' },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
