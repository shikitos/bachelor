export const METRICS_LIST = [
  {
    name: 'FCP',
    description:
      'First Contentful Paint measures the time from the start of the page load to when the first piece of DOM content is rendered.',
    example:
      'The time it takes for the first visible text or image to appear on the screen.',
  },
  {
    name: 'FID',
    description:
      'First Input Delay measures the time between the user’s first interaction with a page and when the browser can respond to that interaction.',
    example: 'The',
  },
  {
    name: 'A button click that takes 200ms before showing a response.',
    description:
      'Largest Contentful Paint measures the render time of the largest visible content element in the viewport.',
    example: 'Loading a hero image or a large heading visible on the page.',
  },
  {
    name: 'TTFB',
    description:
      'Time to First Byte measures the time it takes for the browser to receive the first byte of data from the server.',
    example: 'Server response time from an API endpoint.',
  },
  {
    name: 'domInteractive',
    description:
      'The time it takes for the browser to parse the HTML and execute any scripts before the page becomes interactive.',
    example: 'When the HTML document structure is fully parsed.',
  },
  {
    name: 'loadEventEnd',
    description:
      'The time when the load event has been fully executed, signaling the page is fully loaded.',
    example: 'All page assets like images and stylesheets have been loaded.',
  },
  {
    name: 'domContentLoadedEventEnd',
    description:
      'The time it takes for the HTML document to be completely loaded and parsed, without waiting for stylesheets or images.',
    example: 'When the core DOM is ready for user interaction.',
  },
];
