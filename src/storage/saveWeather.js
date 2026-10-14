import { storageKeys } from '../config/storageKeys.js';
import { writeJson } from './writeJson.js';

export function saveWeather(weather) {
  return writeJson(storageKeys.weather, weather);
}
