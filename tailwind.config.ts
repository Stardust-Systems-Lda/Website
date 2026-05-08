import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#050706',
          900: '#090d0c',
          850: '#0d1311',
          800: '#121917',
          700: '#1a2522',
          600: '#2a3632',
        },
        air: {
          300: '#8af5cf',
          400: '#43e6b2',
          500: '#19c991',
          600: '#0a9f73',
        },
      },
      fontFamily: {
        display: ['Sora', 'Space Grotesk', 'Aptos Display', 'Segoe UI', 'sans-serif'],
        body: ['Sora', 'Inter', 'Aptos', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 55px rgba(25, 201, 145, 0.22)',
        insetline: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'technical-grid':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
