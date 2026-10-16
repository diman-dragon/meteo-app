import { defaultSettings } from '../config/defaultSettings.js';
import { unitOptions } from '../config/unitOptions.js';

export function sanitizeUnits(raw = {}) {
  const units = {};
  for (const [key, options] of Object.entries(unitOptions)) {
    units[key] = options.includes(raw[key]) ? raw[key] : defaultSettings.units[key];
  }
  return units;
}
