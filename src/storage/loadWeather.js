import { storageKeys } from '../config/storageKeys.js';
import { readJson } from './readJson.js';

export function loadWeather() {
  return readJson(storageKeys.weather, null);
}
