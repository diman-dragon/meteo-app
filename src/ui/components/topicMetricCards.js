import { card } from './card.js';
import { metricList } from './metricList.js';
import { topicMetrics } from '../../config/topicMetrics.js';
import { findHourStart } from '../../domain/findHourStart.js';
import { valuesAt } from '../../domain/valuesAt.js';
import { t } from '../../i18n/t.js';

export function topicMetricCards(forecast, topic) {
  const { hourly, hourly_units: hu, daily, daily_units: du, current } = forecast;
  const spec = topicMetrics[topic];
  const index = findHourStart(hourly.time, current.time);
  const cards = [card(t('tab.now'), metricList(valuesAt(hourly, index), hu, spec.hourly))];
  if (spec.daily.length) cards.push(card(t('section.today'), metricList(valuesAt(daily, 0), du, spec.daily)));
  return cards;
}
