import { el } from '../el.js';
import { dailyCard } from '../components/dailyCard.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { dailyChartCards } from '../charts/dailyChartCards.js';

export function dailyPage(weather) {
  const page = el('section', 'page scroller');
  page.append(dailyCard(weather.forecast), ...dailyChartCards(weather.forecast), attributionFooter());
  return page;
}
