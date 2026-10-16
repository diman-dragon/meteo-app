import { pageIds } from '../config/pageIds.js';
import { scrollToPage } from '../ui/pager/scrollToPage.js';

export function openPage(pageId) {
  scrollToPage(pageIds.indexOf(pageId));
}
