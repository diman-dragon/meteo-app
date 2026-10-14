import { appState } from '../state/appState.js';
import { goBack } from './goBack.js';
import { scrollToPage } from '../ui/pager/scrollToPage.js';

export function handleBack() {
  if (appState.screen !== 'main') return goBack();
  if (appState.page !== 0) scrollToPage(0);
}
