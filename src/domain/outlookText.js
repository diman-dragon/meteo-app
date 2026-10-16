import { formatClock } from './formatClock.js';
import { t } from '../i18n/t.js';
import { formatValue } from './formatValue.js';

export function outlookText(forecast, summary) {
  const vars = {
    amount: formatValue('precipitation', summary.rainSum, forecast.hourly_units.precipitation),
    time: summary.rainTime ? formatClock(summary.rainTime) : ''
  };
  if (summary.rainTime === null) return t('outlook.dry');
  return t(summary.rainIndex === 0 ? 'outlook.now' : 'outlook.rain', vars);
}
