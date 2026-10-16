import { pagerView } from '../pager/pagerView.js';
import { pageBuilders } from '../pages/pageBuilders.js';
import { pageIds } from '../../config/pageIds.js';
import { t } from '../../i18n/t.js';

export function weatherPager(weather) {
  const pages = pageIds.map((id) => pageBuilders[id](weather));
  return pagerView(pages, pageIds.map((id) => t(`tab.${id}`)));
}
