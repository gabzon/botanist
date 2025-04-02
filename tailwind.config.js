export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"], // Ensure Tailwind scans the correct files
    theme: {
      extend: {
        colors: {
          'black-olive': 'var(--color-black-olive)',
          'golden-brown': 'var(--color-golden-brown)',
          'satin-gold': 'var(--color-satin-gold)',
          'moss-green': 'var(--color-moss-green)',
          'true-black': 'var(--color-true-black)',
        },
        fontFamily: {
          'barlow': ['Barlow', 'sans-serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
          'prompt': ['Prompt', 'sans-serif'],
        },
      },
    },
    plugins: [],
};