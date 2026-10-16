import { statCard } from './statCard.js';
import { sparkBars } from './sparkBars.js';
import { formatClock } from '../../domain/formatClock.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function precipitationStat(forecast, summary) {
  let sub = t('outlook.dry');
  if (summary.rainTime) sub = summary.rainIndex === 0 ? t('stat.rainNow') : t('stat.rainFrom', { time: formatClock(summary.rainTime) });
  return statCard({
    label: tVar('precipitation'), page: 'precipitation',
    value: `${summary.rainSum} ${forecast.hourly_units.precipitation}`, sub,
    spark: sparkBars(summary.rain, 'var(--c-rain)')
  });
}
