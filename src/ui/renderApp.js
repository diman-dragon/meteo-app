import { appState } from '../state/appState.js';
import { currentLanguage } from '../i18n/currentLanguage.js';
import { mainScreen } from './screens/mainScreen.js';
import { settingsScreen } from './screens/settingsScreen.js';
import { placeScreen } from './screens/placeScreen.js';
import { scrollToPage } from './pager/scrollToPage.js';

export function renderApp(keepScroll = false) {
  const screens = { main: mainScreen, settings: settingsScreen, place: placeScreen };
  const root = document.getElementById('app');
  const tops = [...root.querySelectorAll('.scroller')].map((node) => node.scrollTop);
  const screen = (screens[appState.screen] ?? mainScreen)();
  if (!keepScroll) screen.classList.add('enter');
  document.documentElement.lang = currentLanguage();
  root.replaceChildren(screen);
  scrollToPage(appState.page, false);
  if (keepScroll) root.querySelectorAll('.scroller').forEach((node, i) => { node.scrollTop = tops[i] ?? 0; });
}
