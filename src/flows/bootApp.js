import { appState } from '../state/appState.js';
import { loadSettings } from '../storage/loadSettings.js';
import { loadPlace } from '../storage/loadPlace.js';
import { loadWeather } from '../storage/loadWeather.js';
import { applyTheme } from '../theme/applyTheme.js';
import { registerBackButton } from '../navigation/registerBackButton.js';
import { renderApp } from '../ui/renderApp.js';

export async function bootApp() {
  appState.settings = await loadSettings();
  appState.place = await loadPlace();
  appState.weather = await loadWeather();
  applyTheme(appState.settings.theme);
  registerBackButton();
  renderApp();
}
