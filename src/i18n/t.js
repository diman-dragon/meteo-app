import { currentLanguage } from './currentLanguage.js';
import { ru } from './ru.js';
import { en } from './en.js';

export function t(key, vars = {}) {
  const dictionary = currentLanguage() === 'ru' ? ru : en;
  return (dictionary[key] ?? key).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}
