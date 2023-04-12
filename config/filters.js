const { formatDateUtc } = require("./utils/format-date");

module.exports = function(config) {
  config.addFilter("readableDate", function(date, format = "YYYY-MM-DD") {
    return formatDateUtc(format, date);
  });
};