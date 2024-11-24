import { api, ENDPOINTS, Post as PostType } from 'api';
import { useEffect, useState } from 'react';

import { Post } from './components';
import styles from './DynamicContent.module.scss';

export const DynamicContent = () => {
  const [data, setData] = useState<PostType['posts']>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (isLoading) return;
      setIsLoading(true);
      const result = await api.get<PostType>(
        `${ENDPOINTS.POSTS.GET}?limit=150`
      );
      setData(result.posts);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  return (
    <section className={styles.content}>
      {data.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </section>
  );
};
