const { isProduction } = require("../src/_data/meta");

module.exports = function(config) {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    outputFileExtension: "css",
    async compile(content, path) {
      if(path !== "./src/assets/style/index.css") return;
      let { code, map } = (await import("lightningcss")).bundle({
        filename: path,
        minify: isProduction ? true : false
      });

      return (data) => code;
    }
  });
};