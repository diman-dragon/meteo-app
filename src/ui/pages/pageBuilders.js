import { summaryPage } from './summaryPage.js';
import { temperaturePage } from './temperaturePage.js';
import { precipitationPage } from './precipitationPage.js';
import { windPage } from './windPage.js';
import { airPage } from './airPage.js';
import { atmospherePage } from './atmospherePage.js';
import { sunPage } from './sunPage.js';
import { dailyPage } from './dailyPage.js';
import { historyPage } from './historyPage.js';

export const pageBuilders = Object.freeze({
  summary: summaryPage, temperature: temperaturePage, precipitation: precipitationPage, wind: windPage,
  air: airPage, atmosphere: atmospherePage, sun: sunPage, daily: dailyPage, history: historyPage
});
