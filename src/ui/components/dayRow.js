import { el } from '../el.js';
import { dayDetails } from './dayDetails.js';
import { dayRangeBar } from './dayRangeBar.js';
import { detailsDialog } from '../dialogs/detailsDialog.js';
import { weatherIcon } from '../icons/weatherIcon.js';
import { formatDay } from '../../domain/formatDay.js';

export function dayRow(forecast, index, extent) {
  const { daily } = forecast;
  const row = el('button', 'day-row');
  row.type = 'button';
  const label = formatDay(daily.time[index]);
  const icon = el('span', 'day-icon');
  icon.append(weatherIcon(daily.weather_code[index], 1, 30));
  const rain = daily.precipitation_sum[index];
  row.append(
    el('span', 'day-name', label), icon,
    el('span', 'day-low', `${Math.round(daily.temperature_2m_min[index])}°`),
    dayRangeBar(daily.temperature_2m_min[index], daily.temperature_2m_max[index], extent),
    el('span', 'day-high', `${Math.round(daily.temperature_2m_max[index])}°`),
    el('span', 'day-rain', rain > 0 ? `${Math.round(rain * 10) / 10}` : '')
  );
  row.addEventListener('click', () => detailsDialog(label, dayDetails(forecast, index)));
  return row;
}
