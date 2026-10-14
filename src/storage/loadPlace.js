import { storageKeys } from '../config/storageKeys.js';
import { readJson } from './readJson.js';

export function loadPlace() {
  return readJson(storageKeys.place, null);
}
