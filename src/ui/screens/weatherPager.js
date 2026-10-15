import { pagerView } from '../pager/pagerView.js';
import { summaryPage } from '../pages/summaryPage.js';
import { nowPage } from '../pages/nowPage.js';
import { hourlyPage } from '../pages/hourlyPage.js';
import { dailyPage } from '../pages/dailyPage.js';
import { airPage } from '../pages/airPage.js';
import { t } from '../../i18n/t.js';

export function weatherPager(weather) {
  const pages = [summaryPage(weather), nowPage(weather), hourlyPage(weather), dailyPage(weather), airPage(weather)];
  const labels = ['tab.summary', 'tab.now', 'tab.hourly', 'tab.daily', 'tab.air'].map((key) => t(key));
  return pagerView(pages, labels);
}
