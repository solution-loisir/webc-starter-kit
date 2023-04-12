const { formatDateUtc } = require("./utils/format-date");

module.exports = function(config) {
  config.addFilter("readableDate", function(date) {
    return formatDateUtc("YYYY-MM-DD", date);
  });
};