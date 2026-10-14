import { sunIcon } from './sunIcon.js';
import { moonIcon } from './moonIcon.js';
import { cloudIcon } from './cloudIcon.js';
import { cloudSunIcon } from './cloudSunIcon.js';
import { cloudMoonIcon } from './cloudMoonIcon.js';
import { rainIcon } from './rainIcon.js';
import { snowIcon } from './snowIcon.js';
import { stormIcon } from './stormIcon.js';
import { fogIcon } from './fogIcon.js';

export function pickWeatherIcon(code, isDay) {
  if (code <= 1) return isDay ? sunIcon : moonIcon;
  if (code === 2) return isDay ? cloudSunIcon : cloudMoonIcon;
  if (code === 3) return cloudIcon;
  if (code <= 48) return fogIcon;
  if (code <= 67 || (code >= 80 && code <= 82)) return rainIcon;
  if (code <= 77 || code === 85 || code === 86) return snowIcon;
  return stormIcon;
}
