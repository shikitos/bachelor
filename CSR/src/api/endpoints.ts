export const ENDPOINTS = Object.freeze({
  POSTS: {
    GET: '/posts',
    POST: '/posts',
    DELETE: '/posts/:id',
  },
} as const);

export type Post = {
  posts: {
    _id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  }[];
};
