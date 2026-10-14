import { el } from '../el.js';
import { dayDetails } from './dayDetails.js';
import { detailsDialog } from '../dialogs/detailsDialog.js';
import { weatherIcon } from '../../domain/weatherIcon.js';
import { formatDay } from '../../domain/formatDay.js';

export function dayRow(forecast, index) {
  const { daily } = forecast;
  const row = el('button', 'day-row');
  row.type = 'button';
  const label = formatDay(daily.time[index]);
  row.append(
    el('span', 'day-name', label),
    el('span', 'day-icon', weatherIcon(daily.weather_code[index])),
    el('span', 'day-temp', `${Math.round(daily.temperature_2m_min[index])}° / ${Math.round(daily.temperature_2m_max[index])}°`)
  );
  row.addEventListener('click', () => detailsDialog(label, dayDetails(forecast, index)));
  return row;
}
