/** @param {import("@11ty/eleventy").UserConfig} config */

const { EleventyRenderPlugin, EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function(config) {
  config.addPlugin(EleventyRenderPlugin);
  /*
  config.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "dynamic",
    functionsDir: "./netlify/functions/",
  });
  */
  config.addPlugin(require("@11ty/eleventy-plugin-rss"));
  config.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  config.addPlugin(require("@11ty/eleventy-plugin-webc"), {
    components: [
      "src/_components/**/*.webc",
      "./node_modules/@11ty/eleventy-plugin-syntaxhighlight/syntax-highlight.webc",
      "npm:@11ty/eleventy-img/*.webc"
    ]
  });
  config.addPlugin(require("@11ty/eleventy-img").eleventyImagePlugin, {
    urlPath: "/images/",
    outputDir: "_site/images",
    formats: ["avif", "webp", "jpeg"],
    defaultAttributes: {
			decoding: "async"
		}
  });
  config.addPlugin(require("./config/markdown"));
  config.addPlugin(require("./config/collections"));
  config.addPlugin(require("./config/filters"));
  config.addPlugin(require("./config/transforms"));
  config.addPlugin(require("./config/cssFormat"));
  config.addPlugin(require("./config/jsFormat"));
  config.addPlugin(require("./config/passthroughCopy"));
  
  config.setWatchJavaScriptDependencies(false);

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