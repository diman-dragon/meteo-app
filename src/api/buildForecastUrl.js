import { openMeteoUrls } from '../config/openMeteoUrls.js';
import { currentVars } from '../config/currentVars.js';
import { hourlyVars } from '../config/hourlyVars.js';
import { dailyVars } from '../config/dailyVars.js';
import { forecastDays } from '../config/forecastDays.js';
import { buildQuery } from './buildQuery.js';

export function buildForecastUrl(place) {
  const query = buildQuery({
    latitude: place.lat,
    longitude: place.lon,
    current: currentVars,
    hourly: hourlyVars,
    daily: dailyVars,
    timezone: 'auto',
    forecast_days: forecastDays
  });
  return `${openMeteoUrls.forecast}?${query}`;
}
