import { openMeteoUrls } from '../config/openMeteoUrls.js';
import { airHourlyVars } from '../config/airHourlyVars.js';
import { buildQuery } from './buildQuery.js';

export function buildHistoryAirUrl(place, date) {
  const query = buildQuery({
    latitude: place.lat, longitude: place.lon, start_date: date, end_date: date,
    hourly: airHourlyVars, timezone: 'auto'
  });
  return `${openMeteoUrls.airQuality}?${query}`;
}
