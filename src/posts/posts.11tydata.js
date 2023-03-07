const meta = require("../_data/meta");

module.exports = function() {
  return {
    layout: "article.webc",
    permalink: (data) => meta.isProduction && !data.published ? false : `posts/${data.page.fileSlug}/`,
    og_type: "article",
    og_author: meta.canonical("/about/")
  };
};