const esbuild = require("esbuild");
const jsIndex = "./src/assets/js/index.js";

module.exports = function(config) {
  config.addTemplateFormats("js");

  config.addExtension("js", {
    outputFileExtension: "js",
    async compile(inputContent, inputPath) {

      if(inputPath !== jsIndex) return;

      return async (data) => {
        const output = await esbuild.build({
          entryPoints: [inputPath],
          bundle: true,
          format: "esm",
          target: "es6",
          minify: data.meta.isProduction,
          write: false
        });
        
        return output.outputFiles[0].text;
      };
    }
  });
};