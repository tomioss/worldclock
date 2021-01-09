var dayjs = require('dayjs');
var localizedFormat = require('dayjs/plugin/localizedFormat');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone')

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const DATE_FORMAT = 'L LT';
const TZ_LA = 'America/Los_Angeles';
const TZ_KS = 'Etc/GMT+6';
const TZ_NZ = 'Pacific/Auckland';

export function now() {
  return dayjs().format(DATE_FORMAT);
}

export function nowLa() {
  return dayjs().tz(TZ_LA).format(DATE_FORMAT);
}

export function nowKs() {
  return dayjs().tz(TZ_KS).format(DATE_FORMAT);
}

export function nowNz() {
  return dayjs().tz(TZ_NZ).format(DATE_FORMAT);
}

export function formatDateLocal(date) {
  return dayjs(date).format(DATE_FORMAT);
}

export function formatDateLa(date) {
  return dayjs(date).tz(TZ_LA).format(DATE_FORMAT);
}

export function formatDateKs(date) {
  return dayjs(date).tz(TZ_KS).format(DATE_FORMAT);
}

export function formatDateNz(date) {
  return dayjs(date).tz(TZ_NZ).format(DATE_FORMAT);
}
