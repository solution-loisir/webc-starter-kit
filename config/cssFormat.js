const browserslist = require("browserslist");
const { bundle, browserslistToTargets } = require("lightningcss");
const cssIndex = "./src/assets/style/index.css";

module.exports = function(config) {
  config.addTemplateFormats("css");

  config.addExtension("css", {
    outputFileExtension: "css",
    compile(inputContent, inputPath) {

      if(inputPath !== cssIndex) return;

      return (data) => bundle({
        filename: inputPath,
        minify: data.meta.isProduction,
        targets: browserslistToTargets(browserslist(data.pkg.browserslist)),
        drafts: {
          nesting: true
        }
      }).code;
    }
  });
};