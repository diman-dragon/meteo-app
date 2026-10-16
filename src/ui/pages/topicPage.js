import { el } from '../el.js';
import { topicChartCards } from '../charts/topicChartCards.js';
import { topicMetricCards } from '../components/topicMetricCards.js';
import { attributionFooter } from '../components/attributionFooter.js';

export function topicPage(topic, forecast, ...lead) {
  const page = el('section', 'page scroller');
  page.append(...lead, ...topicChartCards(forecast, topic), ...topicMetricCards(forecast, topic), attributionFooter());
  return page;
}
