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
    image: {
      src: "src/assets/images/bird.jpg",
      alt: "Eagle as profile picture"
    },
    description: "A brief description of me as an author.",
    email: "my@email.com",
    twitter: "@twitterhandle",
    mastodon: "myname@mastodon.com",
    github: "https://github.com/user-name"
  },
  favicon: {
    source: "src/assets/images/_favicons-source/favicon.jpg",
    temp: "src/assets/images/favicons/",
    dest: "/"
  },
  color: {
    theme: "#000",
    background: "#fff"
  },
  og: {
    type: "website",
    image: {
      src: "",
      alt: "",
      width: "1200",
      height: "600"
    }
  }
};