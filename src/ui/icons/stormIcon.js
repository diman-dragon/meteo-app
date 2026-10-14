import { svgEl } from '../svg/svgEl.js';
import { cloudShape } from './shapes/cloudShape.js';

export function stormIcon() {
  const bolt = svgEl('polygon', { points: '34,40 25,54 32,54 29,64 43,47 35,47 39,40', fill: '#FFD34D' });
  return svgEl('g', {}, cloudShape('#8E9BB5', 'translate(0 -8)'), bolt);
}
