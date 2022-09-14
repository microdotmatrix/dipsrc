module.exports = {
  content: [
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',
    './src/**/*.jsx',
    './src/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '512px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px'
      },
    }
  },
  plugins: []
};
