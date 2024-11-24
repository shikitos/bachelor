import { useEffect, useState } from 'react';

import styles from './ImageLoad.module.scss';

const API_URL = 'https://picsum.photos/v2/list?page=1&limit=20';

interface Image {
  id: string;
  author: string;
  download_url: string;
}

export const ImageLoad = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dynamic Image Loader</h1>
      {loading ? (
        <p className={styles.loading}>Loading images...</p>
      ) : (
        <div className={styles.grid}>
          {images.map((image) => (
            <div key={image.id} className={styles.imageCard}>
              <img
                src={image.download_url}
                alt={image.author}
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.caption}>By {image.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
