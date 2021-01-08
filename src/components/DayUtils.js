var dayjs = require('dayjs');
var localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);
const DATE_FORMAT = 'L LT';

export function now() {
  return dayjs().format(DATE_FORMAT);
}
