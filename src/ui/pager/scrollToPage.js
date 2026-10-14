export function scrollToPage(index, smooth = true) {
  const pager = document.querySelector('.pager');
  if (pager) pager.scrollTo({ left: index * pager.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
}
