const { isProduction } = require("../_data/meta");

module.exports = function() {
  return {
    layout: "article.webc",
    permalink: (data) => isProduction && !data.published ? false : `posts/${data.page.fileSlug}/`,
    webc: {
      components: "../../node_modules/@11ty/eleventy-plugin-syntaxhighlight/syntax-highlight.webc"
    }
  };
};