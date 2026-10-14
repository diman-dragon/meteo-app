import { el } from '../el.js';
import { hourItem } from './hourItem.js';

export function hourStrip(hourly, units, start, count) {
  const strip = el('div', 'hour-strip');
  const end = Math.min(start + count, hourly.time.length);
  for (let index = start; index < end; index += 1) strip.append(hourItem(hourly, units, index));
  return strip;
}
