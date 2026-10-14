import { currentCard } from './currentCard.js';
import { hourlyCard } from './hourlyCard.js';
import { dailyCard } from './dailyCard.js';
import { airCard } from './airCard.js';
import { pollenCard } from './pollenCard.js';
import { hasPollenData } from './hasPollenData.js';
import { attributionFooter } from './attributionFooter.js';

export function weatherCards(weather) {
  const fragment = document.createDocumentFragment();
  fragment.append(currentCard(weather.forecast), hourlyCard(weather.forecast), dailyCard(weather.forecast));
  if (weather.air?.current) fragment.append(airCard(weather.air));
  if (weather.air?.current && hasPollenData(weather.air)) fragment.append(pollenCard(weather.air));
  fragment.append(attributionFooter());
  return fragment;
}
