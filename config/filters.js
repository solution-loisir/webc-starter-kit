module.exports = function(config) {
  config.addFilter("copyrightYear", function(date) {
    const initialYear = date ? new Date(date).getFullYear() : new Date().getFullYear();
    const currentYear = new Date().getFullYear();
    return (currentYear - initialYear) > 0 ? `${initialYear} - ${currentYear}` : initialYear;
  });
  config.addFilter("number", function(value) {
    return parseInt(value, 10);
  });
  config.addFilter("loop", function(array, callback) {
    return array.map((item, index, source) => callback(item, index, source)).join("\n");
  });
};