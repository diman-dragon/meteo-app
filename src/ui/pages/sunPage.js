import { topicPage } from './topicPage.js';
import { sunArcCard } from '../components/sunArcCard.js';

export function sunPage({ forecast }) {
  return topicPage('sun', forecast, sunArcCard(forecast));
}
