import { openMeteoUrls } from '../config/openMeteoUrls.js';
import { buildQuery } from './buildQuery.js';

export function buildGeocodingUrl(text, language) {
  const query = buildQuery({ name: text, count: 10, language, format: 'json' });
  return `${openMeteoUrls.geocoding}?${query}`;
}
