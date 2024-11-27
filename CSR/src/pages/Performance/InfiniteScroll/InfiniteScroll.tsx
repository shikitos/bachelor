import { api } from 'api';
import { useCallback, useEffect, useState } from 'react';

export const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch posts from API
  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newPosts = await api.get('/posts', { _page: page, _limit: 10 });

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      if (data.length === 0 || data.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollPosition = window.innerHeight + scrollTop;
    const offset = document.documentElement.offsetHeight - 100;
    if (scrollPosition < offset || !hasMore) return;
    setPage((prevPage) => prevPage + 1);
  }, [hasMore]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Infinite Scroll - Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '20px', listStyle: 'none' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more posts to load.</p>}
    </div>
  );
};
