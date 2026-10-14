import { el } from '../el.js';
import { button } from '../components/button.js';
import { card } from '../components/card.js';
import { field } from '../components/field.js';
import { runSearch } from './runSearch.js';
import { t } from '../../i18n/t.js';

export function searchForm() {
  const form = el('form', 'form');
  const { wrap, input } = field(t('place.searchHint'), 'search');
  const results = el('div', 'results');
  form.append(wrap, button(t('place.find'), null, 'primary', 'submit'), results);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim()) runSearch(input.value.trim(), results);
  });
  return card(t('place.search'), form);
}
