import { useState } from 'react';

import styles from './InteractiveMedia.module.scss';

const videos = [
  { id: 1, src: '/videos/sample1.mp4', title: 'Nature in Motion' },
  { id: 2, src: '/videos/sample2.mp4', title: 'City Lights' },
  { id: 3, src: '/videos/sample3.mp4', title: 'Underwater World' },
];

const images = [
  { id: 1, src: '/images/photo1.jpg', alt: 'Mountain Landscape' },
  { id: 2, src: '/images/photo2.jpg', alt: 'Modern Architecture' },
  { id: 3, src: '/images/photo3.jpg', alt: 'Ocean Sunset' },
];

export const InteractiveMedia = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Interactive Media Showcase</h1>
      </header>
      <section className={styles.mainContent}>
        <div className={styles.videoPlayer}>
          <video
            key={activeVideo.id}
            controls
            className={styles.video}
            poster="/images/video-poster.jpg"
          >
            <source src={activeVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>{activeVideo.title}</h2>
        </div>
        <div className={styles.carousel}>
          {images.map((image) => (
            <div key={image.id} className={styles.carouselItem}>
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.videoSelector}>
          {videos.map((video) => (
            <button
              key={video.id}
              className={`${styles.videoButton} ${
                video.id === activeVideo.id ? styles.active : ''
              }`}
              onClick={() => setActiveVideo(video)}
            >
              {video.title}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
