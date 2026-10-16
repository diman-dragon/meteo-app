import { openMeteoUrls } from '../config/openMeteoUrls.js';
import { historyHourlyVars } from '../config/historyHourlyVars.js';
import { historyDailyVars } from '../config/historyDailyVars.js';
import { isRecentDate } from '../domain/isRecentDate.js';
import { buildQuery } from './buildQuery.js';

export function buildHistoryUrl(place, date) {
  const base = isRecentDate(date) ? openMeteoUrls.forecast : openMeteoUrls.archive;
  const query = buildQuery({
    latitude: place.lat, longitude: place.lon, start_date: date, end_date: date,
    hourly: historyHourlyVars, daily: historyDailyVars, timezone: 'auto'
  });
  return `${base}?${query}`;
}
