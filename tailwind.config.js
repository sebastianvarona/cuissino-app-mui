module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // bg: '#f7f7ff',
        bg: '#f1f1f1',
        bg2: '#fafafa',
        bgDark: '#252e3a',
        // primary: '#B5887F',
        primary: '#3b82f6',
        primaryDark: '#dab5ae',
        success: '#52b788',
        danger: '#E42535',
      },
      boxShadow: {
        customL:
          'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
        customD:
          'rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px',
      },
    },
  },
  darkMode: 'class',
  mode: 'jit',
  plugins: [require('@tailwindcss/forms')],
};
