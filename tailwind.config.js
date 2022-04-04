module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // bg: '#f7f7ff',
        bg: '#f1f1f1',
        bg2: '#fafafa',
        bgDark: '#252e3a',
        primary: '#B5887F',
        primaryDark: '#dab5ae',
        success: '#52b788',
        danger: '#E42535'
      },
      boxShadow: {
        'custom': '0 0 15px rgba(0, 0, 0, 0.0)',
      },
    },
  },
  darkMode: 'class',
  mode: 'jit',
  plugins: [
    require('flowbite/plugin'),
  ],
}