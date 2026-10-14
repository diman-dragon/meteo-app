import { App } from '@capacitor/app';
import { handleBack } from './handleBack.js';

export function registerBackButton() {
  App.addListener('backButton', () => handleBack());
}
