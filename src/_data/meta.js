const path = require("path");

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  canonical(pathBase) {
    return path.join(this.url, pathBase);
  },
  isProduction: Boolean(process.env.PRODUCTION),
  title: "WebC starter kit",
  subtitle: "A kit to start with WebC!",
  author: {
    name: "My Name",
    email: "my@email.com"
  }
};