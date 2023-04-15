const { formatDateUtc } = require("./utils/format-date");

function normalize(value, defaultValue) {
  // Taken from: https://github.com/mozilla/nunjucks/blob/master/nunjucks/src/filters.js#L8
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
    // Taken from (slightly modified): https://github.com/mozilla/nunjucks/blob/master/nunjucks/src/filters.js#L522
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
    // Taken from (slightly modified): https://github.com/mozilla/nunjucks/blob/master/nunjucks/src/filters.js#L620
    str = normalize(str, "");
    const words = str ? str.match(/\w+/g) : null;
    return words ? words.length : 0;
  });

  config.addFilter("striptags", function(input, preserveLinebreaks) {
    // Taken from (slightly modified): https://github.com/mozilla/nunjucks/blob/master/nunjucks/src/filters.js#L489
    input = normalize(input, "");
    let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
    let trimmedInput = input.replace(tags, '').trim();
    let res = "";
    if (preserveLinebreaks) {
      res = trimmedInput
        .replace(/^ +| +$/gm, '') // remove leading and trailing spaces
        .replace(/ +/g, ' ') // squash adjacent spaces
        .replace(/(\r\n)/g, '\n') // normalize linebreaks (CRLF -> LF)
        .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
    } else {
      res = trimmedInput.replace(/\s+/gi, " ");
    }
    return res;
  });
};