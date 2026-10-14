import { currentLanguage } from './currentLanguage.js';
import { ruVars } from './ruVars.js';
import { enVars } from './enVars.js';

export function tVar(name) {
  const dictionary = currentLanguage() === 'ru' ? ruVars : enVars;
  return dictionary[name] ?? name;
}
