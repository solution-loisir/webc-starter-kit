const { isProduction } = require("../src/_data/meta");
const browserslist = require("browserslist");
const package = require("../package.json");
const { bundle, browserslistToTargets } = require("lightningcss");

module.exports = function(config) {
  config.addTemplateFormats("css");

  config.addExtension("css", {
    outputFileExtension: "css",
    compile(inputContent, inputPath) {

      if(inputPath !== "./src/assets/style/index.css") return;

      return () => bundle({
        filename: inputPath,
        minify: isProduction,
        targets: browserslistToTargets(browserslist(package.browserslist)),
        drafts: {
          nesting: true
        }
      }).code;
    }
  });
};