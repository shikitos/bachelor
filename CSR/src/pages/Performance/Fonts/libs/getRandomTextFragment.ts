import { SAMPLE_TEXTS } from '../constants';

export const getRandomTextFragment = (index: number = 1) =>
  SAMPLE_TEXTS[Math.floor((Math.random() + index) % SAMPLE_TEXTS.length)];
