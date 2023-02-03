const path = require("path");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTocDoneRight = require("markdown-it-toc-done-right");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const uslugify = require("uslug");

module.exports = function(config) {
  // Plugins
  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc"
  });
  // Markdown
  config.setLibrary("md", markdownIt ({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItAnchor, {
    slugify: uslugify,
    permalink: true,
    permalinkClass: "title-link",
    permalinkSymbol: "#",
    level: [2, 3]
  })
  .use(markdownItTocDoneRight, {
    slugify: uslugify,
    listType: "ul",
    level: [2, 3],
    containerClass: "auto-toc"
  })
  .use(markdownItAttrs)
  .use(markdownItEleventyImg, {
    imgOptions: {
      widths: [800, 500, 300],
      urlPath: "/images/",
      outputDir: path.join("_site", "images"),
      formats: ["avif", "webp", "jpeg"]
    },
    globalAttributes: {
      class: "image markdown-image",
      decoding: "async",
      sizes: "100vw"
    },
    renderImage(image, attributes) {
      const [ Image, options ] = image;
      const [ src, attrs ] = attributes;
    
      Image(src, options);
    
      const metadata = Image.statsSync(src, options);
      return Image.generateHTML(metadata, attrs, {
        whitespaceMode: "inline"
      });
    }
  }));
  // Collections
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob("./src/posts/*.md");
    return posts.reverse();
  });
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
  }
};