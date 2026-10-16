import { buildHistoryUrl } from './buildHistoryUrl.js';
import { fetchJson } from './fetchJson.js';

export function fetchHistory(place, date) {
  return fetchJson(buildHistoryUrl(place, date));
}
