import styles from './Fonts.module.scss';
import { GOOGLE_FONTS, LOCAL_FONTS } from './constants';
import { getRandomTextFragment, useFonts } from './libs';
import { FontBlock } from './components';
import { getRandomFontIndex } from './libs/getRandomFontIndex';

export const Fonts = () => {
  const { googleFontIndex, localFontIndex } = useFonts();

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
            (_, index) => {
              const isGoogleFont = index % 2 === 0;
              const currentFont = isGoogleFont ? GOOGLE_FONTS : LOCAL_FONTS;
              return (
                <FontBlock
                  key={index}
                  index={index}
                  isGoogleFont={isGoogleFont}
                  font={currentFont[getRandomFontIndex(currentFont)]}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
