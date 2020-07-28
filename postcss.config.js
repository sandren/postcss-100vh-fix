module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('postcss-100vh-fix'),
    require('autoprefixer'),
  ],
});
