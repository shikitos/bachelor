import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import Post from '../models/Post';

const seedPosts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const posts = [];
    for (let i = 0; i < 50; i++) {
      posts.push({
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        date: faker.date.recent(),
        image: faker.image.dataUri(),
      });
    }

    await Post.insertMany(posts);
    console.log('Seeded 50 posts into the database');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedPosts();
