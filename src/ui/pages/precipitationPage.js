import { topicPage } from './topicPage.js';
import { bigValueCard } from '../components/bigValueCard.js';
import { summarize12h } from '../../domain/summarize12h.js';
import { outlookText } from '../../domain/outlookText.js';
import { tVar } from '../../i18n/tVar.js';
import { formatValue } from '../../domain/formatValue.js';

export function precipitationPage({ forecast }) {
  const summary = summarize12h(forecast);
  const value = formatValue('precipitation', summary.rainSum, forecast.hourly_units.precipitation);
  return topicPage('precipitation', forecast, bigValueCard(tVar('precipitation'), value, outlookText(forecast, summary)));
}
