export function setActiveTab(tabs, index) {
  [...tabs.children].forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    if (i === index) tab.scrollIntoView?.({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  });
}
