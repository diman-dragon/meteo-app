import { el } from '../el.js';
import { pagerTabs } from './pagerTabs.js';
import { onPagerScroll } from './onPagerScroll.js';
import { scrollToPage } from './scrollToPage.js';
import { appState } from '../../state/appState.js';

export function pagerView(pages, labels) {
  const wrap = el('div', 'pager-wrap');
  const pager = el('div', 'pager');
  pager.append(...pages);
  const tabs = pagerTabs(labels, appState.page, (index) => scrollToPage(index));
  pager.addEventListener('scroll', () => onPagerScroll(pager, tabs), { passive: true });
  wrap.append(pager, tabs);
  return wrap;
}
