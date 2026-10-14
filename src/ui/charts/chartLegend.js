import { el } from '../el.js';
import { chartColors } from '../../config/chartColors.js';
import { tVar } from '../../i18n/tVar.js';

export function chartLegend(def) {
  const legend = el('div', 'legend');
  for (const series of def.series) {
    const item = el('span', 'legend-item', tVar(series.name));
    const dot = el('i', 'legend-dot');
    dot.style.background = chartColors[series.name];
    item.prepend(dot);
    legend.append(item);
  }
  return legend;
}
