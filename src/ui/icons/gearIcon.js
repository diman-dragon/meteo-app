import { svgEl } from '../svg/svgEl.js';
import { iconSvg } from './iconSvg.js';

export function gearIcon(size = 22) {
  const teeth = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const at = (r) => [12 + r * Math.cos(a), 12 + r * Math.sin(a)];
    const [x1, y1] = at(8.2);
    const [x2, y2] = at(10.8);
    return svgEl('line', { x1, y1, x2, y2, 'stroke-width': 3 });
  });
  return iconSvg(size, ...teeth, svgEl('circle', { cx: 12, cy: 12, r: 6.2 }), svgEl('circle', { cx: 12, cy: 12, r: 2.2 }));
}
