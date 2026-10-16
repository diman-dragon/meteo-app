import { svgEl } from '../svg/svgEl.js';

export function sparkBars(values, color) {
  const svg = svgEl('svg', { viewBox: '0 0 160 44', class: 'spark', 'aria-hidden': 'true' });
  const top = Math.max(1, ...values.filter((v) => v != null));
  const step = 152 / values.length;
  values.forEach((value, i) => {
    const height = value ? Math.max(2, (value / top) * 38) : 1.5;
    svg.append(svgEl('rect', { x: 4 + i * step + step * 0.15, y: 42 - height, width: step * 0.7, height, rx: 2, style: `fill:${color};opacity:${value ? 1 : 0.3}` }));
  });
  return svg;
}
