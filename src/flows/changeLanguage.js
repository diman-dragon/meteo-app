import { appState } from '../state/appState.js';
import { saveSettings } from '../storage/saveSettings.js';
import { renderApp } from '../ui/renderApp.js';

export async function changeLanguage(languageId) {
  appState.settings = { ...appState.settings, language: languageId };
  renderApp(true);
  await saveSettings(appState.settings);
}
