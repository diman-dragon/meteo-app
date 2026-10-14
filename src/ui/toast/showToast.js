import { el } from '../el.js';

export function showToast(message) {
  const toast = el('div', 'toast', message);
  toast.setAttribute('role', 'status');
  document.body.append(toast);
  setTimeout(() => toast.remove(), 3500);
}
