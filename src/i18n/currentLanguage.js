import { appState } from '../state/appState.js';
import { resolveLanguage } from './resolveLanguage.js';

export function currentLanguage() {
  return resolveLanguage(appState.settings.language);
}
