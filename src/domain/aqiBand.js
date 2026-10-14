import { aqiThresholds } from '../config/aqiThresholds.js';

export function aqiBand(value) {
  const index = aqiThresholds.findIndex((limit) => value < limit);
  return index < 0 ? aqiThresholds.length : index;
}
