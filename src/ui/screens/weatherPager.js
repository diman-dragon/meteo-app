import { pagerView } from '../pager/pagerView.js';
import { nowPage } from '../pages/nowPage.js';
import { hourlyPage } from '../pages/hourlyPage.js';
import { dailyPage } from '../pages/dailyPage.js';
import { airPage } from '../pages/airPage.js';
import { t } from '../../i18n/t.js';

export function weatherPager(weather) {
  const pages = [nowPage(weather), hourlyPage(weather), dailyPage(weather), airPage(weather)];
  return pagerView(pages, [t('tab.now'), t('tab.hourly'), t('tab.daily'), t('tab.air')]);
}
