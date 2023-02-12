module.exports = function(config) {
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob("./src/posts/*.md");
    return posts.reverse();
  });
  config.addCollection("pages", (collection) => collection.getFilteredByGlob("./src/pages/*.webc"));
};