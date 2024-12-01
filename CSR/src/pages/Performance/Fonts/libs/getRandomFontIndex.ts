export const getRandomFontIndex = (fonts: string[]): number => {
  return Math.floor(Math.random() * fonts.length);
};
