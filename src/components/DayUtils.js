var dayjs = require('dayjs');

const DATE_FORMAT = 'MM/DD/YYYY hh:mm:ss A';

export function now() {
  return dayjs().format(DATE_FORMAT);
}
