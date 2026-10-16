import { appState } from '../state/appState.js';
import { saveSettings } from '../storage/saveSettings.js';
import { renderApp } from '../ui/renderApp.js';

export async function changeUnit(key, value) {
  appState.settings = { ...appState.settings, units: { ...appState.settings.units, [key]: value } };
  renderApp(true);
  await saveSettings(appState.settings);
}
