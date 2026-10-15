import { statCard } from './statCard.js';
import { sparkline } from './sparkline.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function temperatureStat(forecast, summary) {
  return statCard({
    label: tVar('temperature_2m'),
    value: `${Math.round(forecast.current.temperature_2m)}°`,
    sub: t('sum.range', { min: Math.round(summary.tempMin), max: Math.round(summary.tempMax) }),
    spark: sparkline(summary.temps, 'var(--c-temp)', 'sp-temp')
  });
}
