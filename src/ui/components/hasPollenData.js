import { pollenVars } from '../../config/pollenVars.js';

export function hasPollenData(air) {
  return pollenVars.some((name) => air.current[name] != null);
}
