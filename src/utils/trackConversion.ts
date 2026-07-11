export const trackConversion = (
  event: 'line_click' | 'phone_click',
  clickLocation: string
): void => {
  window.dataLayer?.push({ event, click_location: clickLocation })
}
