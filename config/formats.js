const { isProduction } = require("../src/_data/meta");
const browserslist = require("browserslist");
const package = require("../package.json");
const { bundle, browserslistToTargets } = require("lightningcss");

module.exports = function(config) {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    outputFileExtension: "css",
    async compile(inputContent, inputPath) {
      if(inputPath !== "./src/assets/style/index.css") return;
      let { code } = bundle({
        filename: inputPath,
        minify: isProduction ? true : false,
        targets: browserslistToTargets(browserslist(package.browserslist)),
        drafts: {
          nesting: true
        }
      });

      return () => code;
    }
  });
};