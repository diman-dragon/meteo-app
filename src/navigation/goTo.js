import { appState } from '../state/appState.js';
import { renderApp } from '../ui/renderApp.js';

export function goTo(screen) {
  appState.history.push(appState.screen);
  appState.screen = screen;
  renderApp();
}
