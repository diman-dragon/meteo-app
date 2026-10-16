import { statCard } from './statCard.js';
import { sparkline } from './sparkline.js';
import { windArrowIcon } from '../icons/windArrowIcon.js';
import { formatValue } from '../../domain/formatValue.js';
import { compassDirection } from '../../domain/compassDirection.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function windStat(forecast, summary) {
  const { current: c, current_units: u } = forecast;
  const gusts = formatValue('wind_gusts_10m', Math.round(summary.gustMax), u.wind_gusts_10m);
  return statCard({
    label: `${tVar('wind_speed_10m')} · ${compassDirection(c.wind_direction_10m)}`, page: 'wind',
    value: formatValue('wind_speed_10m', Math.round(c.wind_speed_10m), u.wind_speed_10m),
    extra: windArrowIcon(c.wind_direction_10m, 22),
    sub: t('sum.gusts', { value: gusts }),
    spark: sparkline(summary.wind, 'var(--c-wind)', 'sp-wind')
  });
}
