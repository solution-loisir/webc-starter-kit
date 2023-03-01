const path = require("path");

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  canonical(pathBase) {
    return path.join(this.url, pathBase);
  },
  isProduction: Boolean(process.env.PRODUCTION),
  title: "WebC starter kit",
  subtitle: "A kit to start with WebC!",
  description: "A starter project for Eleventy (11ty) using WebC as a main template langage. Also includes opiniated assets processing and a few more bells and whistles.",
  display: "fullscreen",
  author: {
    name: "My Name",
    email: "my@email.com",
    twitter: "@twitterhandle",
    mastodon: "myname@mastodon.com"
  },
  favicon: {
    png192: "assets/images/favicon192.png",
    png512: "assets/images/favicon512.png",
    ico: ""
  },
  color: {
    theme: "#000",
    background: "#fff"
  }
};