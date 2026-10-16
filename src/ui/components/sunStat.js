import { statCard } from './statCard.js';
import { dayRangeBar } from './dayRangeBar.js';
import { sunFraction } from '../../domain/sunFraction.js';
import { formatClock } from '../../domain/formatClock.js';
import { formatDuration } from '../../domain/formatDuration.js';
import { tVar } from '../../i18n/tVar.js';
import { t } from '../../i18n/t.js';

export function sunStat(forecast) {
  const { daily, current } = forecast;
  const [rise, set] = [daily.sunrise[0], daily.sunset[0]];
  const progress = sunFraction(rise, set, current.time);
  return statCard({
    label: tVar('daylight_duration'), page: 'sun',
    value: formatDuration(daily.daylight_duration[0]),
    sub: t('sun.times', { rise: formatClock(rise), set: formatClock(set) }),
    spark: dayRangeBar(0, progress, { min: 0, max: 1 })
  });
}
