import { svgEl } from '../svg/svgEl.js';
import { compassDirection } from '../../domain/compassDirection.js';

export function windCompass(degrees) {
  const svg = svgEl('svg', { viewBox: '0 0 200 200', class: 'compass', role: 'img' });
  svg.append(svgEl('circle', { cx: 100, cy: 100, r: 74, class: 'compass-ring' }));
  [0, 90, 180, 270].forEach((angle) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    svg.append(svgEl('text', { x: 100 + 90 * Math.cos(rad), y: 105 + 90 * Math.sin(rad), 'text-anchor': 'middle' }, compassDirection(angle)));
  });
  const arrow = svgEl('g', { transform: `rotate(${degrees} 100 100)` });
  arrow.append(
    svgEl('line', { x1: 100, y1: 54, x2: 100, y2: 136, class: 'compass-arrow' }),
    svgEl('polygon', { points: '86,126 100,150 114,126', class: 'compass-head' })
  );
  svg.append(arrow);
  return svg;
}
