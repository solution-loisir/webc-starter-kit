const { isProduction } = require("../_data/meta");

module.exports = function() {
  return {
    layout: "article.webc",
    permalink: (data) => isProduction && !data.published ? false : `posts/${data.page.fileSlug}/`
  };
};