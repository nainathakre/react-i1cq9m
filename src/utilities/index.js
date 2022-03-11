export function isMobile() {
  return window.matchMedia('screen and (max-width: 767px)').matches;
}
export function isTablet() {
  return (
    window.matchMedia('screen and (min-width: 768px)').matches &&
    window.matchMedia('screen and (max-width: 1024px)').matches
  );
}
export function isDesktop() {
  return window.matchMedia('screen and (min-width: 1024px)').matches;
}
