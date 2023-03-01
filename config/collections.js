module.exports = function(config) {
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob("./src/posts/*.md");
    return posts.reverse();
  });
  config.addCollection("pages", (collection) => {
    const pages = collection.getFilteredByGlob("./src/pages/*.webc");
    return pages.sort((a, b) => a.data.navigation.order - b.data.navigation.order);
  });
};