module.exports = function(config) {
  config.addFilter("loop", function(array, callback) {
    return array.map((item, index, source) => callback(item, index, source)).join("\n");
  });
};