import { el } from '../el.js';
import { card } from '../components/card.js';
import { weatherIcon } from '../icons/weatherIcon.js';
import { formatClock } from '../../domain/formatClock.js';
import { t } from '../../i18n/t.js';

export function historyTimeline(data) {
  const { hourly } = data;
  const row = el('div', 'timeline');
  for (let i = 0; i < hourly.time.length; i += 3) {
    const col = el('div', 'tl-col');
    const icon = el('div', 'tl-icon');
    icon.append(weatherIcon(hourly.weather_code[i], hourly.is_day?.[i] ?? 1, 30));
    col.append(el('div', 'tl-time', formatClock(hourly.time[i])), icon, el('div', 'tl-temp', `${Math.round(hourly.temperature_2m[i])}°`));
    row.append(col);
  }
  return card(t('section.hourly'), row);
}
