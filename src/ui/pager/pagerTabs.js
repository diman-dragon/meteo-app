import { el } from '../el.js';
import { setActiveTab } from './setActiveTab.js';

export function pagerTabs(labels, activeIndex, onPick) {
  const tabs = el('nav', 'tabs');
  tabs.setAttribute('role', 'tablist');
  labels.forEach((label, index) => {
    const tab = el('button', 'tab', label);
    tab.type = 'button';
    tab.setAttribute('role', 'tab');
    tab.addEventListener('click', () => onPick(index));
    tabs.append(tab);
  });
  setActiveTab(tabs, activeIndex);
  return tabs;
}
