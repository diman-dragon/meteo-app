import { storageKeys } from '../config/storageKeys.js';
import { readJson } from './readJson.js';
import { sanitizeSettings } from './sanitizeSettings.js';

export async function loadSettings() {
  return sanitizeSettings(await readJson(storageKeys.settings, {}));
}
