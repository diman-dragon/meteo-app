import { svgEl } from '../svg/svgEl.js';
import { cloudShape } from './shapes/cloudShape.js';

export function rainIcon() {
  const drop = (x) => svgEl('line', { x1: x, y1: 48, x2: x - 3, y2: 57, stroke: '#4DB3FF', 'stroke-width': 3, 'stroke-linecap': 'round' });
  return svgEl('g', {}, cloudShape('#B7C4D9', 'translate(0 -7)'), drop(25), drop(35), drop(45));
}
