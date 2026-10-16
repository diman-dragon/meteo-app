import { unitPresets } from '../config/unitPresets.js';

export function matchingPreset(units) {
  const found = unitPresets.find((preset) => Object.entries(preset.units).every(([key, value]) => units[key] === value));
  return found ? found.id : null;
}
