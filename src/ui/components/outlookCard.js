import { el } from '../el.js';
import { card } from './card.js';
import { hoursTimeline } from './hoursTimeline.js';
import { outlookText } from '../../domain/outlookText.js';
import { t } from '../../i18n/t.js';

export function outlookCard(forecast, summary) {
  return card(t('outlook.title'), hoursTimeline(forecast, summary), el('p', 'outlook-text', outlookText(forecast, summary)));
}
