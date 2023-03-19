module.exports = function(config) {
  config.setServerPassthroughCopyBehavior("passthrough");

  config.addPassthroughCopy({ "src/assets/images/favicons/": "/" });
};