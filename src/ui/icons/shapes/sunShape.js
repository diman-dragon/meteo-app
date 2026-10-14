import { svgEl } from '../../svg/svgEl.js';

export function sunShape(cx, cy, r) {
  const rays = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const at = (d) => [cx + d * Math.cos(a), cy + d * Math.sin(a)];
    const [x1, y1] = at(r + 3.5);
    const [x2, y2] = at(r + 7.5);
    return svgEl('line', { x1, y1, x2, y2, stroke: '#FFC857', 'stroke-width': 3, 'stroke-linecap': 'round' });
  });
  return svgEl('g', {}, ...rays, svgEl('circle', { cx, cy, r, fill: '#FFC857' }));
}
