const postcss = require('postcss');


module.exports = postcss.plugin('resolvePath', () => css => {
  return {
    ...css,
    source: {
      ...css.source,
      input: {
        ...css.source.input,
        css: css.source.input.css.replace(/~assets/g, './assets')
      }
    }
  };
});