const meta = require("../src/_data/meta");

module.exports = function(config) {
  config.setServerPassthroughCopyBehavior("passthrough");

  config.addPassthroughCopy({ [meta.favicon.temp]: meta.favicon.dest });
};