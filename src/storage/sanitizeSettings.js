import { defaultSettings } from '../config/defaultSettings.js';
import { themeIds } from '../config/themeIds.js';
import { languageIds } from '../config/languageIds.js';

const legacyThemes = { amoled: 'dark', 'light-brown': 'light' };

export function sanitizeSettings(raw) {
  const theme = legacyThemes[raw.theme] ?? raw.theme;
  return {
    theme: themeIds.includes(theme) ? theme : defaultSettings.theme,
    language: languageIds.includes(raw.language) ? raw.language : defaultSettings.language
  };
}
