import styles from './Details.module.scss';

type MetricDetailsProps = {
  name: string;
  description: string;
  example: string;
};

export const Details = ({ name, description, example }: MetricDetailsProps) => {
  return (
    <div className={styles.details}>
      <h2 className={styles.details__title}>{name}</h2>
      <p className={styles.details__description}>{description}</p>
      <p className={styles.details__example}>
        <strong>Example:</strong> {example}
      </p>
    </div>
  );
};
