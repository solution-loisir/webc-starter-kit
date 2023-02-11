const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const markdownConfig = require("./markdown.config");

module.exports = function(config) {
  // Plugins
  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc"
  });
  config.addPlugin(markdownConfig);

  // Collections
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob("./src/posts/*.md");
    return posts.reverse();
  });
  config.addCollection("pages", (collection) => collection.getFilteredByGlob("./src/pages/*.webc"));

  // Config object
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    pathPrefix: "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "liquid", "html", "md", "11ty.js"]
  };
};