export const loadGoogleFont = (fontName: string) => {
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
    ' ',
    '+'
  )}:wght@400;700&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};
