import { statCard } from './statCard.js';
import { sparkline } from './sparkline.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';
import { formatTemp } from '../../domain/formatTemp.js';

export function temperatureStat(forecast, summary) {
  return statCard({
    label: tVar('temperature_2m'), page: 'temperature',
    value: formatTemp(forecast.current.temperature_2m),
    sub: t('sum.range', { min: formatTemp(summary.tempMin), max: formatTemp(summary.tempMax) }),
    spark: sparkline(summary.temps, 'var(--c-temp)', 'sp-temp')
  });
}
