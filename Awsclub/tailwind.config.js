/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust this path based on your project structure
    theme: {
      extend: {
        keyframes: {
          progress: {
            '0%': {
              opacity: '0',
              transformOrigin: 'left center',
              transform: 'scaleX(0) scaleY(0.5) translateX(0)',
            },
            '50%': {
              opacity: '1',
              transformOrigin: 'left center',
              transform: 'scaleX(0.5) scaleY(1) translateX(50%)',
            },
            '51%': {
              opacity: '1',
              transformOrigin: 'right center',
              transform: 'scaleX(0.5) scaleY(1) translateX(-50%)',
            },
            '100%': {
              opacity: '0',
              transformOrigin: 'right center',
              transform: 'scaleX(0) scaleY(0.5) translateX(0)',
            },
          },
        },
        animation: {
          progress: 'progress 1s linear infinite',
        },
      },
    },
    plugins: [],
  };
  