import { el } from '../el.js';
import { placeResultItem } from './placeResultItem.js';
import { searchPlaces } from '../../api/searchPlaces.js';
import { currentLanguage } from '../../i18n/currentLanguage.js';
import { t } from '../../i18n/t.js';

export async function runSearch(text, container) {
  container.replaceChildren(el('p', 'hint', t('place.searching')));
  try {
    const places = await searchPlaces(text, currentLanguage());
    const nodes = places.map(placeResultItem);
    container.replaceChildren(...(nodes.length ? nodes : [el('p', 'hint', t('place.noResults'))]));
  } catch (error) {
    container.replaceChildren(el('p', 'hint', t('searchError', { message: error.message })));
  }
}
