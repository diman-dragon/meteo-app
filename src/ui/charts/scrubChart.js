import { svgEl } from '../svg/svgEl.js';
import { chartColors } from '../../config/chartColors.js';
import { chartGeometry as g } from '../../config/chartGeometry.js';
import { tVar } from '../../i18n/tVar.js';
import { formatValue } from '../../domain/formatValue.js';

export function scrubChart(parts, ctx) {
  const { svg, xScale, yScale, step } = parts;
  const { def, columns, units, readout, pointLabel } = ctx;
  const marker = svgEl('line', { class: 'chart-marker', y1: g.top, y2: g.height - g.bottom, visibility: 'hidden' });
  const dots = def.series.map((s) => svgEl('circle', { r: 4, class: 'chart-dot', style: `fill:${chartColors[s.name]}`, visibility: 'hidden' }));
  svg.append(marker, ...dots);
  svg.addEventListener('click', (event) => {
    const box = svg.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * g.width;
    const index = Math.max(0, Math.min(columns[0].length - 1, Math.floor((x - g.left) / step)));
    marker.setAttribute('x1', xScale(index)); marker.setAttribute('x2', xScale(index)); marker.setAttribute('visibility', 'visible');
    def.series.forEach((s, k) => {
      const value = columns[k][index];
      dots[k].setAttribute('visibility', value == null ? 'hidden' : 'visible');
      if (value != null) { dots[k].setAttribute('cx', xScale(index)); dots[k].setAttribute('cy', yScale(value)); }
    });
    readout.textContent = `${pointLabel(index)} · ${def.series.map((s, k) => `${tVar(s.name)} ${formatValue(s.name, columns[k][index], units[s.name])}`).join(' · ')}`;
  });
}
