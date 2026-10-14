import { el } from '../el.js';
import { heroCard } from '../components/heroCard.js';
import { currentTiles } from '../components/currentTiles.js';
import { sunArcCard } from '../components/sunArcCard.js';
import { allParamsCard } from '../components/allParamsCard.js';
import { attributionFooter } from '../components/attributionFooter.js';

export function nowPage(weather) {
  const page = el('section', 'page scroller');
  const { forecast } = weather;
  page.append(heroCard(forecast), currentTiles(forecast), sunArcCard(forecast), allParamsCard(forecast), attributionFooter());
  return page;
}
