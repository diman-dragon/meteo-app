import { appState } from '../state/appState.js';
import { renderApp } from '../ui/renderApp.js';

export function goHome() {
  appState.history = [];
  appState.screen = 'main';
  renderApp();
}
