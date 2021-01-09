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

function formatNowTz(timezone) {
  return dayjs().tz(timezone).format(DATE_FORMAT);
}

export function nowLa() {
  return formatNowTz(TZ_LA);
}

export function nowKs() {
  return formatNowTz(TZ_KS);
}

export function nowNz() {
  return formatNowTz(TZ_NZ);
}

export function formatDateLocal(date) {
  return dayjs(date).format(DATE_FORMAT);
}

function formatDateTz(date, timezone) {
  return dayjs(date).tz(timezone).format(DATE_FORMAT);
}

export function formatDateLa(date) {
  return formatDateTz(date, TZ_LA);
}

export function formatDateKs(date) {
  return formatDateTz(date, TZ_KS);
}

export function formatDateNz(date) {
  return formatDateTz(date, TZ_NZ);
}
