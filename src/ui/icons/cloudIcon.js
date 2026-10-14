import { svgEl } from '../svg/svgEl.js';
import { cloudShape } from './shapes/cloudShape.js';

export function cloudIcon() {
  return svgEl('g', {}, cloudShape('#DCE4F0'));
}
