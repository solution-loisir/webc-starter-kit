const path = require("path");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTocDoneRight = require("markdown-it-toc-done-right");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const uslugify = require("uslug");

module.exports = function(config) {
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
      widths: [600, 300],
      urlPath: "/images/",
      outputDir: path.join("_site", "images"),
      formats: ["avif", "webp", "jpeg"]
    },
    globalAttributes: {
      class: "image markdown-image",
      decoding: "async",
      sizes: "(max-width: 48rem) 300px, (min-width: 48rem) 600px"
    },
    renderImage(image, attributes) {
      const [ Image, options ] = image;
      const [ src, attrs ] = attributes;
    
      Image(src, options);

      console.log("[markdown-it-eleventy-img] Writing _site/images/* from ./assets/images/*");
    
      const metadata = Image.statsSync(src, options);
      return Image.generateHTML(metadata, attrs, {
        whitespaceMode: "inline"
      });
    }
  }));
};