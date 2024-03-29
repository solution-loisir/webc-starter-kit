const meta = require("../_data/meta");

module.exports = {
  layout: "article.webc",
  eleventyComputed: {
    eleventyExcludeFromCollections(data) {
      return meta.isProduction && data.published === false ? true : false;
    }
  },
  permalink(data) {
    return meta.isProduction && data.published === false ? false : `blog/posts/${data.page.fileSlug}/`;
  },
  og_type: "article",
  og_author: meta.canonical("/about/"),
  author: meta.author.name,
  author_image: meta.author.image.src,
  author_image_alt: meta.author.image.alt
};