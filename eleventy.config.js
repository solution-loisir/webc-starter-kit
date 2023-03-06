/** @param {import("@11ty/eleventy").UserConfig} config */

module.exports = function(config) {
  config.addPlugin(require("@11ty/eleventy").EleventyRenderPlugin);
  config.addPlugin(require("@11ty/eleventy-plugin-rss"));
  config.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  config.addPlugin(require("@11ty/eleventy-plugin-webc"), {
    components: "src/_components/**/*.webc"
  });
  config.addPlugin(require("./config/markdown"));
  config.addPlugin(require("./config/collections"));
  config.addPlugin(require("./config/filters"));
  config.addPlugin(require("./config/transforms"));
  config.addPlugin(require("./config/cssFormat"));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    pathPrefix: "/",
    htmlTemplateEngine: "webc",
    markdownTemplateEngine: "webc",
    templateFormats: ["njk", "liquid", "html", "md", "11ty.js", "webc"]
  };
};