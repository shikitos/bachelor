import styles from '../Fonts.module.scss';
import { getRandomTextFragment } from '../libs';

type Props = {
  font: string;
  index: number;
  isGoogleFont: boolean;
};

export const FontBlock = ({ index, font, isGoogleFont }: Props) => {
  return (
    <div
      key={index}
      style={{
        fontFamily: `${font}, sans-serif`,
      }}
      className={styles.item}
    >
      <h3 className={styles.item__header} style={{ fontFamily: 'Roboto' }}>
        Current {isGoogleFont ? 'google font' : 'local font'}: {font}
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
