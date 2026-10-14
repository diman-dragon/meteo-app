import { buildAirQualityUrl } from './buildAirQualityUrl.js';
import { fetchJson } from './fetchJson.js';

export function fetchAirQuality(place) {
  return fetchJson(buildAirQualityUrl(place));
}
