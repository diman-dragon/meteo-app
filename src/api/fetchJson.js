import { requestTimeoutMs } from '../config/requestTimeoutMs.js';

export async function fetchJson(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), requestTimeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.reason || `HTTP ${response.status}`);
    return body;
  } finally {
    clearTimeout(timer);
  }
}
