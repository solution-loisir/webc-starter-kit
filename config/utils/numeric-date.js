function numericDate(date) {
  return new Date(date || Date()).toLocaleString("en-CA", {timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric"});
};

module.exports = {
  numericDate
};