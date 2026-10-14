import { storageKeys } from '../config/storageKeys.js';
import { writeJson } from './writeJson.js';

export function saveSettings(settings) {
  return writeJson(storageKeys.settings, settings);
}
