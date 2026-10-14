import { appState } from '../state/appState.js';
import { currentLanguage } from '../i18n/currentLanguage.js';
import { mainScreen } from './screens/mainScreen.js';
import { settingsScreen } from './screens/settingsScreen.js';
import { placeScreen } from './screens/placeScreen.js';

export function renderApp(keepScroll = false) {
  const screens = { main: mainScreen, settings: settingsScreen, place: placeScreen };
  const offset = keepScroll ? window.scrollY : 0;
  document.documentElement.lang = currentLanguage();
  document.getElementById('app').replaceChildren((screens[appState.screen] ?? mainScreen)());
  window.scrollTo(0, offset);
}
