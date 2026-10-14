import { svgEl } from '../svg/svgEl.js';
import { cloudShape } from './shapes/cloudShape.js';
import { moonShape } from './shapes/moonShape.js';

export function cloudMoonIcon() {
  return svgEl('g', {}, moonShape(26, 25, 1.5), cloudShape('#C6D0E2', 'translate(3 2)'));
}
