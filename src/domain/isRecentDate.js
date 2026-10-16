import { todayIso } from './todayIso.js';
import { shiftDate } from './shiftDate.js';
import { historyRecentDays } from '../config/historyRecentDays.js';

export function isRecentDate(isoDate) {
  return isoDate >= shiftDate(todayIso(), -historyRecentDays);
}
