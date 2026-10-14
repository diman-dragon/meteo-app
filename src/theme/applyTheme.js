import { applySystemBars } from './applySystemBars.js';

export function applyTheme(themeId) {
  document.documentElement.dataset.theme = themeId;
  return applySystemBars(themeId);
}
