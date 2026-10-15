import { el } from '../el.js';
import { weatherIcon } from '../icons/weatherIcon.js';
import { formatClock } from '../../domain/formatClock.js';
import { t } from '../../i18n/t.js';

export function hoursTimeline(forecast, summary) {
  const { hourly } = forecast;
  const row = el('div', 'timeline');
  for (let k = 0; summary.start + k < summary.end; k += 2) {
    const i = summary.start + k;
    const col = el('div', 'tl-col');
    const icon = el('div', 'tl-icon');
    icon.append(weatherIcon(hourly.weather_code[i], hourly.is_day[i], 30));
    col.append(
      el('div', 'tl-time', k === 0 ? t('tab.now') : formatClock(hourly.time[i])), icon,
      el('div', 'tl-temp', `${Math.round(hourly.temperature_2m[i])}°`)
    );
    row.append(col);
  }
  return row;
}
