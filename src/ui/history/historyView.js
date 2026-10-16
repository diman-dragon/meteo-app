import { dayHero } from './dayHero.js';
import { historyTimeline } from './historyTimeline.js';
import { historyStats } from './historyStats.js';
import { historyChartCards } from './historyChartCards.js';
import { historyDetails } from './historyDetails.js';

export function historyView(history) {
  const fragment = document.createDocumentFragment();
  fragment.append(dayHero(history), historyTimeline(history.data), historyStats(history), ...historyChartCards(history), historyDetails(history.data));
  return fragment;
}
