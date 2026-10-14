import { el } from '../el.js';
import { button } from '../components/button.js';
import { card } from '../components/card.js';
import { field } from '../components/field.js';
import { showToast } from '../toast/showToast.js';
import { parseCoordinates } from '../../domain/parseCoordinates.js';
import { selectPlace } from '../../flows/selectPlace.js';
import { t } from '../../i18n/t.js';

export function manualCoordsForm() {
  const form = el('form', 'form');
  const name = field(t('place.name'));
  const lat = field(t('place.lat'), 'decimal');
  const lon = field(t('place.lon'), 'decimal');
  form.append(name.wrap, lat.wrap, lon.wrap, button(t('place.save'), null, 'primary', 'submit'));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const point = parseCoordinates(lat.input.value, lon.input.value);
    if (!point) return showToast(t('place.invalid'));
    const label = name.input.value.trim() || `${t('place.coordsName')} ${point.lat.toFixed(2)}, ${point.lon.toFixed(2)}`;
    selectPlace({ name: label, region: '', lat: point.lat, lon: point.lon });
  });
  return card(t('place.manual'), form);
}
