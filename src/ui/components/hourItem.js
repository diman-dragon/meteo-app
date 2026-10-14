import { el } from '../el.js';
import { detailsDialog } from '../dialogs/detailsDialog.js';
import { metricList } from './metricList.js';
import { hourlyVars } from '../../config/hourlyVars.js';
import { weatherIcon } from '../../domain/weatherIcon.js';
import { formatClock } from '../../domain/formatClock.js';
import { formatDay } from '../../domain/formatDay.js';
import { valuesAt } from '../../domain/valuesAt.js';

export function hourItem(hourly, units, index) {
  const time = hourly.time[index];
  const item = el('button', 'hour-item');
  item.type = 'button';
  const pop = hourly.precipitation_probability?.[index];
  item.append(
    el('span', 'hour-time', formatClock(time)),
    el('span', 'hour-icon', weatherIcon(hourly.weather_code[index], hourly.is_day[index])),
    el('span', 'hour-temp', `${Math.round(hourly.temperature_2m[index])}°`),
    el('span', 'hour-pop', pop == null ? '' : `${pop}%`)
  );
  item.addEventListener('click', () => detailsDialog(
    `${formatDay(time.slice(0, 10))}, ${formatClock(time)}`,
    metricList(valuesAt(hourly, index), units, hourlyVars)
  ));
  return item;
}
