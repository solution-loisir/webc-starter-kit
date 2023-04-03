const { formatDateUtc } = require("./utils/format-date");

module.exports = function(config) {
  config.addFilter("dateISOString", function(date) {
    return new Date(date).toISOString();
  });
  config.addFilter("readableDate", function(date) {
    return formatDateUtc("YYYY-MM-DD", date);
  });
};