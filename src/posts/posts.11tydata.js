const meta = require("../_data/meta");

module.exports = {
  layout: "article.webc",
  //eleventyExcludeFromCollections: (data) => meta.isProduction && !data.published ? true : false,
  permalink: (data) => meta.isProduction && !data.published ? false : `posts/${data.page.fileSlug}/`,
  og_type: "article",
  og_author: meta.canonical("/about/"),
  author: meta.author.name,
  author_image: meta.author.image.src,
  author_image_alt: meta.author.image.alt
};