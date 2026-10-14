import { el } from '../el.js';

export function dayRangeBar(min, max, extent) {
  const span = extent.max - extent.min || 1;
  const track = el('span', 'range-track');
  const fill = el('span', 'range-fill');
  fill.style.left = `${((min - extent.min) / span) * 100}%`;
  fill.style.width = `${Math.max(4, ((max - min) / span) * 100)}%`;
  track.append(fill);
  return track;
}
