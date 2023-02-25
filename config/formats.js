const { isProduction } = require("../src/_data/meta");
const browserslist = require("browserslist");

module.exports = function(config) {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    outputFileExtension: "css",
    async compile(content, path) {
      if(path !== "./src/assets/style/index.css") return;
      let { code, map } = (await import("lightningcss")).bundle({
        filename: path,
        minify: isProduction ? true : false,
        targets: (await import("lightningcss")).browserslistToTargets(browserslist("defaults")),
        drafts: {
          nesting: true
        }
      });

      return (data) => code;
    }
  });
};