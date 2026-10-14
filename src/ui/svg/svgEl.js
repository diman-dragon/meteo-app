const NS = 'http://www.w3.org/2000/svg';

export function svgEl(tag, attrs = {}, ...children) {
  const node = document.createElementNS(NS, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, String(value));
  node.append(...children);
  return node;
}
