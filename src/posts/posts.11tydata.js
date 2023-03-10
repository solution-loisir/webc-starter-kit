const meta = require("../_data/meta");

module.exports = {
  layout: "article.webc",
  permalink: (data) => meta.isProduction && !data.published ? false : `posts/${data.page.fileSlug}/`,
  og_type: "article",
  og_author: meta.canonical("/about/"),
  author: meta.author.name
};