import styles from '../Fonts.module.scss';
import { GOOGLE_FONTS } from '../constants';
import { getRandomTextFragment } from '../libs';

type Props = {
  googleFontIndex: number;
  index: number;
};

export const FontBlock = ({ index, googleFontIndex }: Props) => {
  return (
    <div
      key={index}
      style={{
        fontFamily: `${GOOGLE_FONTS[googleFontIndex]}, sans-serif`,
      }}
      className={styles.item}
    >
      <h3 className={styles.item__header} style={{ fontFamily: 'Roboto' }}>
        Current font family: {GOOGLE_FONTS[googleFontIndex]}
      </h3>
      <p className={styles.item__paragraph}>
        Paragraph: {getRandomTextFragment(index)}
      </p>
      <span className={styles.item__inline}>
        Inline text: {getRandomTextFragment()}
      </span>
    </div>
  );
};
