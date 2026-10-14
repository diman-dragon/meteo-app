import { storageKeys } from '../config/storageKeys.js';
import { writeJson } from './writeJson.js';

export function savePlace(place) {
  return writeJson(storageKeys.place, place);
}
