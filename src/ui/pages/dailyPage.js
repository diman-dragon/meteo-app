import { el } from '../el.js';
import { dailyCard } from '../components/dailyCard.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { topicChartCards } from '../charts/topicChartCards.js';

export function dailyPage({ forecast }) {
  const page = el('section', 'page scroller');
  page.append(dailyCard(forecast), ...topicChartCards(forecast, 'daily'), attributionFooter());
  return page;
}
