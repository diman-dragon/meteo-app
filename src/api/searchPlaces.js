import { buildGeocodingUrl } from './buildGeocodingUrl.js';
import { fetchJson } from './fetchJson.js';
import { normalizePlace } from './normalizePlace.js';

export async function searchPlaces(text, language) {
  const data = await fetchJson(buildGeocodingUrl(text, language));
  return (data.results ?? []).map(normalizePlace);
}
