import { svgEl } from '../svg/svgEl.js';
import { moonShape } from './shapes/moonShape.js';

export function moonIcon() {
  return svgEl('g', {}, moonShape(32, 32, 2.3));
}
