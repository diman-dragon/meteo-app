export function setActiveTab(tabs, index) {
  [...tabs.children].forEach((tab, i) => tab.setAttribute('aria-selected', String(i === index)));
}
