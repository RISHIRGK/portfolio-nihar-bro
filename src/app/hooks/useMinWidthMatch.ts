"use client";
import { useEffect, useState } from 'react';

const useMaxWidthMatch = (maxWidth: number): boolean => {
  const query = `(max-width: ${maxWidth - 1}px)`; // -1 to make it strictly less than
  const [matches, setMatches] = useState(() => typeof  window!=='undefined' && window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Just in case it's different now
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [maxWidth]);

  return matches;
};

export default useMaxWidthMatch;
