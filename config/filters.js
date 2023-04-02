const { numericDate } = require("./utils/numeric-date");

module.exports = function(config) {
  config.addFilter("validDateString", function(date) {
    return new Date(date).toISOString();
  });
  config.addFilter("readableDate", numericDate);
};