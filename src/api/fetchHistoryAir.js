import { buildHistoryAirUrl } from './buildHistoryAirUrl.js';
import { fetchJson } from './fetchJson.js';

export function fetchHistoryAir(place, date) {
  return fetchJson(buildHistoryAirUrl(place, date));
}
