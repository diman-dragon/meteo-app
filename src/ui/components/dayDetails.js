import { el } from '../el.js';
import { metricList } from './metricList.js';
import { hourStrip } from './hourStrip.js';
import { dailyVars } from '../../config/dailyVars.js';
import { valuesAt } from '../../domain/valuesAt.js';
import { t } from '../../i18n/t.js';

export function dayDetails(forecast, dayIndex) {
  const { daily, daily_units: dailyUnits, hourly, hourly_units: hourlyUnits } = forecast;
  const body = el('div', 'dialog-body');
  body.append(
    metricList(valuesAt(daily, dayIndex), dailyUnits, dailyVars),
    el('h3', 'card-title', t('section.hourly')),
    hourStrip(hourly, hourlyUnits, dayIndex * 24, 24)
  );
  return body;
}
