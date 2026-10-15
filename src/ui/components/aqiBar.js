import { el } from '../el.js';
import { aqiColors } from '../../config/aqiColors.js';

export function aqiBar(value) {
  const track = el('div', 'gauge-track');
  aqiColors.forEach((color) => {
    const segment = el('i', 'gauge-seg');
    segment.style.background = color;
    track.append(segment);
  });
  const marker = el('span', 'gauge-marker');
  marker.style.left = `${Math.min(100, (value / 120) * 100)}%`;
  track.append(marker);
  return track;
}
