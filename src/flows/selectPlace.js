import { appState } from '../state/appState.js';
import { savePlace } from '../storage/savePlace.js';
import { saveWeather } from '../storage/saveWeather.js';
import { goHome } from '../navigation/goHome.js';

export async function selectPlace(place) {
  appState.place = place;
  appState.weather = null;
  await Promise.all([savePlace(place), saveWeather(null)]);
  goHome();
}
