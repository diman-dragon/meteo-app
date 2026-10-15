import { svgEl } from '../svg/svgEl.js';
import { smoothPath } from '../charts/smoothPath.js';
import { scaleLinear } from '../charts/scaleLinear.js';

export function sparkline(values, color, uid) {
  const svg = svgEl('svg', { viewBox: '0 0 160 44', class: 'spark', 'aria-hidden': 'true' });
  const clean = values.map((v, i) => (v == null ? null : [i, v])).filter(Boolean);
  if (clean.length < 2) return svg;
  const lo = Math.min(...clean.map((p) => p[1]));
  const hi = Math.max(...clean.map((p) => p[1]));
  const x = scaleLinear(0, values.length - 1, 4, 156);
  const y = scaleLinear(lo, hi === lo ? lo + 1 : hi, 38, 6);
  const points = clean.map(([i, v]) => [x(i), y(v)]);
  const line = smoothPath(points);
  const stops = [0.4, 0].map((opacity, k) => svgEl('stop', { offset: k, style: `stop-color:${color};stop-opacity:${opacity}` }));
  svg.append(
    svgEl('defs', {}, svgEl('linearGradient', { id: uid, x1: 0, y1: 0, x2: 0, y2: 1 }, ...stops)),
    svgEl('path', { d: `${line}L${points.at(-1)[0]} 42L${points[0][0]} 42Z`, fill: `url(#${uid})` }),
    svgEl('path', { d: line, class: 'spark-line', style: `stroke:${color}` }),
    svgEl('circle', { cx: points[0][0], cy: points[0][1], r: 3.5, style: `fill:${color}` })
  );
  return svg;
}
