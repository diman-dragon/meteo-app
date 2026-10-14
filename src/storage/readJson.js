import { kvGet } from './kvGet.js';

export async function readJson(key, fallback) {
  try {
    const parsed = JSON.parse(await kvGet(key));
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}
