import { svgEl } from '../svg/svgEl.js';
import { card } from './card.js';
import { sunFraction } from '../../domain/sunFraction.js';
import { formatClock } from '../../domain/formatClock.js';
import { formatDuration } from '../../domain/formatDuration.js';
import { tVar } from '../../i18n/tVar.js';

export function sunArcCard(forecast) {
  const { daily, current } = forecast;
  const [rise, set] = [daily.sunrise[0], daily.sunset[0]];
  const f = sunFraction(rise, set, current.time);
  const a = (1 - f) * Math.PI;
  const arc = 'M30 108A120 96 0 0 1 270 108';
  const svg = svgEl('svg', { viewBox: '0 0 300 140', class: 'sun-arc', role: 'img' });
  svg.append(
    svgEl('path', { d: arc, class: 'sun-track', pathLength: 100 }),
    svgEl('path', { d: arc, class: 'sun-progress', pathLength: 100, 'stroke-dasharray': `${f * 100} 100` }),
    svgEl('circle', { cx: 150 + 120 * Math.cos(a), cy: 108 - 96 * Math.sin(a), r: 8, class: 'sun-dot' }),
    svgEl('text', { x: 30, y: 130, 'text-anchor': 'middle' }, formatClock(rise)),
    svgEl('text', { x: 270, y: 130, 'text-anchor': 'middle' }, formatClock(set)),
    svgEl('text', { x: 150, y: 96, 'text-anchor': 'middle', class: 'sun-center' }, formatDuration(daily.daylight_duration[0]))
  );
  return card(`${tVar('sunrise')} · ${tVar('sunset')}`, svg);
}
