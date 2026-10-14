import { svgEl } from '../svg/svgEl.js';
import { cloudShape } from './shapes/cloudShape.js';
import { sunShape } from './shapes/sunShape.js';

export function cloudSunIcon() {
  return svgEl('g', {}, sunShape(25, 24, 9), cloudShape('#DCE4F0', 'translate(3 2)'));
}
