import { appState } from '../state/appState.js';
import { saveSettings } from '../storage/saveSettings.js';
import { applyTheme } from '../theme/applyTheme.js';
import { renderApp } from '../ui/renderApp.js';

export async function changeTheme(themeId) {
  appState.settings = { ...appState.settings, theme: themeId };
  applyTheme(themeId);
  renderApp(true);
  await saveSettings(appState.settings);
}
