module.exports = {
  eleventyComputed: {
    title(data) {
      return `#${data.pagination.items[0]}`;
    },
    description(data) {
      return `Listing posts related to ${data.pagination.items[0]}.`;
    }
  },
  permalink(data) {
    return `tags/${this.slugify(data.pagination.items[0])}/`;
  }
};