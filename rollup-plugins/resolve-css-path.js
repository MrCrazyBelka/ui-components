const postcss = require('postcss');


module.exports = postcss.plugin('resolvePath', () => css => {
  console.log(css);
  return css;
});