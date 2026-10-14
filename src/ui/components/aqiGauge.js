import { el } from '../el.js';
import { card } from './card.js';
import { aqiBand } from '../../domain/aqiBand.js';
import { aqiColors } from '../../config/aqiColors.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function aqiGauge(air) {
  const value = air.current.european_aqi;
  if (value == null) return document.createDocumentFragment();
  const band = aqiBand(value);
  const track = el('div', 'gauge-track');
  aqiColors.forEach((color) => { const seg = el('i', 'gauge-seg'); seg.style.background = color; track.append(seg); });
  const marker = el('span', 'gauge-marker');
  marker.style.left = `${Math.min(100, (value / 120) * 100)}%`;
  track.append(marker);
  const head = el('div', 'gauge-head');
  const number = el('span', 'gauge-number', String(Math.round(value)));
  number.style.color = aqiColors[band];
  head.append(number, el('span', 'gauge-band', t(`aqi.${band}`)));
  return card(tVar('european_aqi'), head, track);
}
