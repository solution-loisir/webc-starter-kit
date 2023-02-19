module.exports = function(config) {
  config.addFilter("copyrightYear", function(date) {
    const initialYear = date ? new Date(date).getFullYear() : new Date().getFullYear();
    const currentYear = new Date().getFullYear();
    return (currentYear - initialYear) > 0 ? `${initialYear} - ${currentYear}` : initialYear;
  });
};