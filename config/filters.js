module.exports = function(config) {
  config.addFilter("validDateString", function(date) {
    return new Date(date).toISOString();
  });
  config.addFilter("readableDate", function(date) {
    return new Date(date).toLocaleDateString("en-CA", {timeZone: "utc", year: "numeric", month: "numeric", day: "numeric"});
  });
};