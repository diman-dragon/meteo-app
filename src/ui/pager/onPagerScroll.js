import { appState } from '../../state/appState.js';
import { setActiveTab } from './setActiveTab.js';

export function onPagerScroll(pager, tabs) {
  const index = Math.round(pager.scrollLeft / (pager.clientWidth || 1));
  if (index === appState.page) return;
  appState.page = index;
  setActiveTab(tabs, index);
}
