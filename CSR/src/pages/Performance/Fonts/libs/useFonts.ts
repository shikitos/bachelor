import { useState, useEffect } from 'react';
import { GOOGLE_FONTS, SETTINGS, LOCAL_FONTS } from '../constants';
import { loadGoogleFont } from './loadGoogleFont';

export const useFonts = () => {
  const [googleFontIndex, setGoogleFontIndex] = useState<number>(0);
  const [localFontIndex, setLocalFontIndex] = useState<number>(0);

  useEffect(() => {
    loadGoogleFont(GOOGLE_FONTS[googleFontIndex]);
  }, [googleFontIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoogleFontIndex((prev) => (prev + 1) % GOOGLE_FONTS.length);
    }, SETTINGS.GOOGLE_FONTS_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalFontIndex((prev) => (prev + 1) % LOCAL_FONTS.length);
    }, SETTINGS.LOCAL_FONTS_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return { googleFontIndex, localFontIndex };
};
