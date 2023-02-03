const path = require("path");

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  feedUrl() {
    return path.join(this.url, "feed.xml");
  },
  title: "WebC starter kit",
  subtitle: "A kit to start with WebC!",
  author: {
    name: "My Name",
    email: "my@email.com"
  }
};