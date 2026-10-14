import { el } from '../el.js';
import { selectPlace } from '../../flows/selectPlace.js';

export function placeResultItem(place) {
  const item = el('button', 'result');
  item.type = 'button';
  item.append(el('span', 'result-name', place.name), el('span', 'hint', place.region));
  item.addEventListener('click', () => selectPlace(place));
  return item;
}
