import { defaultSettings } from '../config/defaultSettings.js';
import { themeIds } from '../config/themeIds.js';
import { languageIds } from '../config/languageIds.js';

export function sanitizeSettings(raw) {
  return {
    theme: themeIds.includes(raw.theme) ? raw.theme : defaultSettings.theme,
    language: languageIds.includes(raw.language) ? raw.language : defaultSettings.language
  };
}
