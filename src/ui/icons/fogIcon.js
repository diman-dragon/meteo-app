import { svgEl } from '../svg/svgEl.js';
import { cloudShape } from './shapes/cloudShape.js';

export function fogIcon() {
  const line = (y, x1, x2) => svgEl('line', { x1, y1: y, x2, y2: y, stroke: '#AEB9CB', 'stroke-width': 3, 'stroke-linecap': 'round' });
  return svgEl('g', {}, cloudShape('#DCE4F0', 'translate(0 -8)'), line(46, 16, 48), line(52, 22, 52), line(58, 16, 44));
}
