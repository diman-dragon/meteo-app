import { svgEl } from '../svg/svgEl.js';
import { sunShape } from './shapes/sunShape.js';

export function sunIcon() {
  return svgEl('g', {}, sunShape(32, 32, 12));
}
