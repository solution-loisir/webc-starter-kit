const { formatDateUtc } = require("./utils/format-date");

function normalize(value, defaultValue) {
  if(value === null || value === undefined || value === false) {
    return defaultValue;
  }
  return value;
};

module.exports = function(config) {
  config.addFilter("readableDate", function(date, format = "YYYY-MM-DD") {
    return formatDateUtc(format, date);
  });

  config.addFilter("truncate", function(input, length, killwords, end) {
    input = normalize(input, "");
    length = length || 60;
  
    if(input.length <= length) {
      return input;
    }
  
    if(killwords) {
      input = input.substring(0, length);
    } else {
      let idx = input.lastIndexOf(" ", length);
      if (idx === -1) {
        idx = length;
      }
  
      input = input.substring(0, idx);
    }
  
    input += (end !== undefined && end !== null) ? end : "...";
    return input;
  });
  
  config.addFilter("wordcount", function(str) {
    str = normalize(str, "");
    const words = str ? str.match(/\w+/g) : null;
    return words ? words.length : null;
  });
};