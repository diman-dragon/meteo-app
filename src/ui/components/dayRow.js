import { el } from '../el.js';
import { dayDetails } from './dayDetails.js';
import { dayRangeBar } from './dayRangeBar.js';
import { detailsDialog } from '../dialogs/detailsDialog.js';
import { weatherIcon } from '../icons/weatherIcon.js';
import { formatDay } from '../../domain/formatDay.js';
import { formatTemp } from '../../domain/formatTemp.js';
import { formatValue } from '../../domain/formatValue.js';

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
    el('span', 'day-low', formatTemp(daily.temperature_2m_min[index])),
    dayRangeBar(daily.temperature_2m_min[index], daily.temperature_2m_max[index], extent),
    el('span', 'day-high', formatTemp(daily.temperature_2m_max[index])),
    el('span', 'day-rain', rain > 0 ? formatValue('precipitation_sum', rain, forecast.daily_units.precipitation_sum) : '')
  );
  row.addEventListener('click', () => detailsDialog(label, dayDetails(forecast, index)));
  return row;
}
