/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Vibrant & Flashy Feminine Palette
          pink: {
            DEFAULT: '#E91E63',
            vibrant: '#FF1493',
            hot: '#FF007F',
            magenta: '#C2185B',
            dark: '#880E4F',
            deep: '#4A0025',
            light: '#F8BBD0',
            soft: '#FCE4EC',
            silk: '#FFF0F5',
            glow: '#FF69B4',
          },
          gold: {
            DEFAULT: '#FFD700',
            bright: '#FFC107',
            light: '#FFE082',
            champagne: '#FCE881',
            dark: '#D4AF37',
            amber: '#FF9800',
            border: '#F6C85F'
          },
          burgundy: {
            DEFAULT: '#880E4F',
            light: '#AD1457',
            dark: '#4A0025',
            deep: '#2D0017',
            hover: '#A0125C'
          },
          cream: {
            DEFAULT: '#FFF9FB',
            light: '#FFFFFF',
            dark: '#FFF0F5',
            surface: '#FDF2F7'
          },
          charcoal: {
            DEFAULT: '#26111B',
            muted: '#5C3848',
            light: '#8C6275',
            subtle: '#B594A4'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        cursive: ['"Cinzel Decorative"', 'serif']
      },
      boxShadow: {
        'pink-glow': '0 0 25px rgba(255, 20, 147, 0.35)',
        'pink-glow-lg': '0 0 40px rgba(255, 20, 147, 0.55)',
        'gold-glow': '0 0 25px rgba(255, 215, 0, 0.45)',
        'gold-glow-lg': '0 0 45px rgba(255, 215, 0, 0.65)',
        'glam-card': '0 12px 35px -8px rgba(233, 30, 99, 0.15), 0 4px 12px -2px rgba(255, 215, 0, 0.1)',
        'glam-hover': '0 20px 45px -10px rgba(233, 30, 99, 0.28), 0 8px 25px -4px rgba(255, 215, 0, 0.25)',
      },
      backgroundImage: {
        'glam-gradient': 'linear-gradient(135deg, #FF1493 0%, #E91E63 45%, #C2185B 100%)',
        'hot-gradient': 'linear-gradient(135deg, #FF007F 0%, #E91E63 50%, #880E4F 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFF176 50%, #FFB300 100%)',
        'pink-gold-gradient': 'linear-gradient(135deg, #FF1493 0%, #FFB300 50%, #E91E63 100%)',
        'dark-velvet': 'linear-gradient(180deg, #3B001E 0%, #1F0010 100%)'
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
