export const concatClassNames = (
  ...classNames: (string | undefined)[]
): string => {
  return classNames.filter(Boolean).join(' ');
};
