import { App } from '@capacitor/app';
import { appState } from '../state/appState.js';
import { goBack } from './goBack.js';

export function registerBackButton() {
  App.addListener('backButton', () => {
    if (appState.screen === 'main') App.exitApp();
    else goBack();
  });
}
