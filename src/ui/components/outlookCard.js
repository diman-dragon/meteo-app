import { el } from '../el.js';
import { card } from './card.js';
import { hoursTimeline } from './hoursTimeline.js';
import { formatClock } from '../../domain/formatClock.js';
import { t } from '../../i18n/t.js';

export function outlookCard(forecast, summary) {
  const unit = forecast.hourly_units.precipitation;
  const vars = { mm: summary.rainSum, unit, time: summary.rainTime ? formatClock(summary.rainTime) : '' };
  const key = summary.rainTime === null ? 'outlook.dry' : summary.rainIndex === 0 ? 'outlook.now' : 'outlook.rain';
  return card(t('outlook.title'), hoursTimeline(forecast, summary), el('p', 'outlook-text', t(key, vars)));
}
