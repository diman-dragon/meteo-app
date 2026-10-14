import { appState } from '../state/appState.js';
import { renderApp } from '../ui/renderApp.js';

export function goBack() {
  appState.screen = appState.history.pop() ?? 'main';
  renderApp();
}
