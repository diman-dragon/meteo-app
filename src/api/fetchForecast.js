import { buildForecastUrl } from './buildForecastUrl.js';
import { fetchJson } from './fetchJson.js';

export function fetchForecast(place) {
  return fetchJson(buildForecastUrl(place));
}
