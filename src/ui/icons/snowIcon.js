import { svgEl } from '../svg/svgEl.js';
import { cloudShape } from './shapes/cloudShape.js';

export function snowIcon() {
  const flake = (cx, cy) => svgEl('circle', { cx, cy, r: 3, fill: '#BFE3FF', stroke: 'rgba(0,0,0,0.12)', 'stroke-width': 1 });
  return svgEl('g', {}, cloudShape('#CBD8EA', 'translate(0 -7)'), flake(24, 51), flake(34, 56), flake(44, 51));
}
