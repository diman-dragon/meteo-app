import { openMeteoUrls } from '../config/openMeteoUrls.js';
import { airQualityVars } from '../config/airQualityVars.js';
import { airHourlyVars } from '../config/airHourlyVars.js';
import { pollenVars } from '../config/pollenVars.js';
import { buildQuery } from './buildQuery.js';

export function buildAirQualityUrl(place) {
  const query = buildQuery({
    latitude: place.lat,
    longitude: place.lon,
    current: [...airQualityVars, ...pollenVars],
    hourly: airHourlyVars,
    timezone: 'auto'
  });
  return `${openMeteoUrls.airQuality}?${query}`;
}
