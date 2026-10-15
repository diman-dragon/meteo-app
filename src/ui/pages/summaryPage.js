import { el } from '../el.js';
import { heroCard } from '../components/heroCard.js';
import { outlookCard } from '../components/outlookCard.js';
import { temperatureStat } from '../components/temperatureStat.js';
import { windStat } from '../components/windStat.js';
import { airStat } from '../components/airStat.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { summarize12h } from '../../domain/summarize12h.js';

export function summaryPage(weather) {
  const { forecast, air } = weather;
  const summary = summarize12h(forecast);
  const grid = el('div', 'stats');
  grid.append(temperatureStat(forecast, summary), windStat(forecast, summary));
  const page = el('section', 'page scroller');
  page.append(heroCard(forecast), outlookCard(forecast, summary), grid, airStat(air), attributionFooter());
  return page;
}
