/**
 * Scrolls the window to the top of the page with a smooth animation.
 */
function ScrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
export default ScrollToTop;
