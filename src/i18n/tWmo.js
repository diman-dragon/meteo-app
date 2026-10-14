import { currentLanguage } from './currentLanguage.js';
import { ruWmo } from './ruWmo.js';
import { enWmo } from './enWmo.js';

export function tWmo(code) {
  const dictionary = currentLanguage() === 'ru' ? ruWmo : enWmo;
  return dictionary[code] ?? '—';
}
