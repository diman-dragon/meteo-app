import { kvSet } from './kvSet.js';

export function writeJson(key, value) {
  return kvSet(key, JSON.stringify(value));
}
