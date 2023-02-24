const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const markdown = require("./config/markdown");
const collections = require("./config/collections");
const filters = require("./config/filters");
const transforms = require("./config/transforms");

module.exports = function(config) {
  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc"
  });
  config.addPlugin(markdown);
  config.addPlugin(collections);
  config.addPlugin(filters);
  config.addPlugin(transforms);

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