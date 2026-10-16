import { el } from '../el.js';
import { openPage } from '../../flows/openPage.js';

export function linkCard(title, sub, pageId) {
  const node = el('button', 'link-card');
  node.type = 'button';
  const text = el('div', '');
  text.append(el('div', 'link-title', title), el('div', 'stat-sub', sub));
  node.append(text, el('span', 'chevron', '›'));
  node.addEventListener('click', () => openPage(pageId));
  return node;
}
