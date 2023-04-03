const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

function formatDateUtc(format, date) {
  return dayjs.utc(date).format(format);
};

function formatDateLocal(format, date) {
  return dayjs(date).format(format);
};

module.exports = {
  formatDateUtc,
  formatDateLocal
};