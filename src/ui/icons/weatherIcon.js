import { svgEl } from '../svg/svgEl.js';
import { pickWeatherIcon } from './pickWeatherIcon.js';

export function weatherIcon(code, isDay = 1, size = 48) {
  const svg = svgEl('svg', { viewBox: '0 0 64 64', width: size, height: size, 'aria-hidden': 'true' });
  svg.append(pickWeatherIcon(code, isDay)());
  return svg;
}
