import { el } from '../el.js';
import { heroCard } from '../components/heroCard.js';
import { outlookCard } from '../components/outlookCard.js';
import { linkCard } from '../components/linkCard.js';
import { temperatureStat } from '../components/temperatureStat.js';
import { precipitationStat } from '../components/precipitationStat.js';
import { windStat } from '../components/windStat.js';
import { airStat } from '../components/airStat.js';
import { atmosphereStat } from '../components/atmosphereStat.js';
import { sunStat } from '../components/sunStat.js';
import { attributionFooter } from '../components/attributionFooter.js';
import { summarize12h } from '../../domain/summarize12h.js';
import { t } from '../../i18n/t.js';

export function summaryPage({ forecast, air }) {
  const s = summarize12h(forecast);
  const grid = el('div', 'stats');
  grid.append(temperatureStat(forecast, s), precipitationStat(forecast, s), windStat(forecast, s),
    airStat(air), atmosphereStat(forecast, s), sunStat(forecast));
  const page = el('section', 'page scroller');
  page.append(heroCard(forecast), outlookCard(forecast, s), grid,
    linkCard(t('link.daily'), t('link.daily.sub'), 'daily'),
    linkCard(t('link.history'), t('link.history.sub'), 'history'), attributionFooter());
  return page;
}
