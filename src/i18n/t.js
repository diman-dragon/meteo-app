import { currentLanguage } from './currentLanguage.js';
import { ru } from './ru.js';
import { en } from './en.js';
import { ruUnits } from './ruUnits.js';
import { enUnits } from './enUnits.js';

const dictionaries = { ru: { ...ru, ...ruUnits }, en: { ...en, ...enUnits } };

export function t(key, vars = {}) {
  const text = dictionaries[currentLanguage()][key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}
