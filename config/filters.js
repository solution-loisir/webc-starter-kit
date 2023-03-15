module.exports = function(config) {
  config.addFilter("validDateString", function(date) {
    return new Date(date).toISOString();
  });
  config.addFilter("readableDate", function(date) {
    return new Date(date).toLocaleDateString("en-CA", {timeZone: "utc", year: "numeric", month: "numeric", day: "numeric"});
  });
  config.addFilter("remove", function(exclude) {
    return {
      _exclude: typeof exclude === "string" ? [exclude] : exclude,
      from(source = {}) {
        const sourceKeys = Object.keys(source);

        this._exclude.forEach((keyToRemove) => {
          const keyIndex = sourceKeys.findIndex((sourceKey) => sourceKey === keyToRemove);
          sourceKeys.splice(keyIndex, 1);
        });
    
        return sourceKeys.reduce((acc, current) => {
          acc[current] = source[current];
          return acc;
        }, {});
      }
    };
  });
};