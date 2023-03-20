/** @param {import("@11ty/eleventy").UserConfig} config */

const { chunk } = require("./utils");

module.exports = function(config) {
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob("./src/posts/*.md");
    return posts.reverse();
  });
  config.addCollection("pages", (collection) => {
    const pages = collection.getFilteredByGlob("./src/pages/*.webc");
    return pages.sort((a, b) => a.data.navigation.order - b.data.navigation.order);
  });
  config.addCollection("series", (collection) => {
    const posts = collection.getFilteredByGlob("./src/posts/*.md");
    return posts.reduce((obj, post) => {
      if(!post.data.series) return obj;
      if(!obj[post.data.series]) obj[post.data.series] = [];

      obj[post.data.series].push(post);
      return obj;
    }, {});
  });
  config.addCollection("tags", (collection) => {
    const posts = collection.getFilteredByGlob("./src/posts/*.md");
    const tagSet = posts.reduce((set, template) => {
      if(template.data.tags) {
        template.data.tags.forEach((tag) => set.add(tag));
      }
      return set;
    }, new Set());
    return [...tagSet];
  });
};