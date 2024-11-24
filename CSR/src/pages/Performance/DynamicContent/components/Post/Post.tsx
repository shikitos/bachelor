import { Post as PostType } from 'api';

import styles from './Post.module.scss';

type PostProps = PostType['posts'][number];

export const Post = ({ title, description, date, image }: PostProps) => {
  return (
    <article className={styles.post}>
      <div className={styles['post-image']}>
        <img
          src={image}
          alt={title}
          width={75}
          height={75}
          className={styles['post-image__content']}
        />
      </div>
      <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      <hgroup className={styles['post-hgroup']}>
        <h5 className={styles['post-hgroup__title']}>{title}</h5>
        <p className={styles['post-hgroup__description']}>{description}</p>
      </hgroup>
    </article>
  );
};
