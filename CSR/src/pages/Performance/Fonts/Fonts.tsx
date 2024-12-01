import { useState, useEffect } from 'react';
import styles from './Fonts.module.scss';
import { GOOGLE_FONTS, LOCAL_FONTS, SETTINGS } from './constants';
import { getRandomTextFragment } from './libs';
import { FontBlock } from './components';
import { getRandomFontIndex } from './libs/getRandomFontIndex';

const loadGoogleFont = (fontName: string) => {
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
    ' ',
    '+'
  )}:wght@400;700&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

export const Fonts = () => {
  const [googleFontIndex, setGoogleFontIndex] = useState<number>(0);
  const [localFontIndex, setLocalFontIndex] = useState<number>(0);

  useEffect(() => {
    loadGoogleFont(GOOGLE_FONTS[googleFontIndex]);
  }, [googleFontIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoogleFontIndex((prev) => (prev + 1) % GOOGLE_FONTS.length);
    }, SETTINGS.GOOGLE_FONTS_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalFontIndex((prev) => (prev + 1) % LOCAL_FONTS.length);
    }, SETTINGS.LOCAL_FONTS_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.fonts}>
      <h1 className={styles.fonts__title}>Font Performance Testing</h1>

      <div className={styles['fonts-content']}>
        <h2 className={styles['fonts-content__title']}>Google Fonts</h2>
        <div
          className={styles['fonts-content__fragment']}
          style={{
            fontFamily: `${GOOGLE_FONTS[googleFontIndex]}, sans-serif`,
          }}
        >
          {getRandomTextFragment()}
        </div>
        <p className={styles['fonts-content__info']}>
          <strong>Current Google Font:</strong> {GOOGLE_FONTS[googleFontIndex]}
        </p>
      </div>

      <div className={styles['fonts-content']}>
        <h2 className={styles['fonts-content__title']}>Local Fonts</h2>
        <div
          className={styles['fonts-content__fragment']}
          style={{
            fontFamily: `${LOCAL_FONTS[localFontIndex]}, sans-serif`,
          }}
        >
          {getRandomTextFragment()}
        </div>
        <p className={styles['fonts-content__info']}>
          <strong>Current Local Font:</strong> {LOCAL_FONTS[localFontIndex]}
        </p>
      </div>

      <div className={styles['fonts-blocks']}>
        <h2 className={styles['fonts-blocks__title']}>Rendering Examples</h2>
        <div className={styles['fonts-blocks__container']}>
          {Array.from({ length: (Math.random() * 10 + 5) * 2 }).map(
            (_, index) => (
              <FontBlock
                key={index}
                index={index}
                googleFontIndex={getRandomFontIndex(GOOGLE_FONTS)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
