import { card } from './card.js';
import { hourStrip } from './hourStrip.js';
import { findHourStart } from '../../domain/findHourStart.js';
import { hourlyStripCount } from '../../config/hourlyStripCount.js';
import { t } from '../../i18n/t.js';

export function hourStripCard(forecast) {
  const { hourly, hourly_units: units, current } = forecast;
  const start = findHourStart(hourly.time, current.time);
  return card(t('section.hourly'), hourStrip(hourly, units, start, hourlyStripCount));
}
