import { el } from '../el.js';
import { card } from '../components/card.js';
import { button } from '../components/button.js';
import { appState } from '../../state/appState.js';
import { goTo } from '../../navigation/goTo.js';
import { t } from '../../i18n/t.js';

export function placeSetting() {
  const place = appState.place;
  const summary = el('p', 'place-summary', place ? place.name : t('place.none'));
  const region = place?.region ? el('p', 'hint', place.region) : '';
  return card(t('place'), summary, region, button(t('place.search'), () => goTo('place'), 'primary'));
}
