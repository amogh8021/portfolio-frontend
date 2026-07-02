import { useEffect, useState, useCallback } from 'react';

const ACCENTS = [
  { name: 'gold', rgb: '201 162 39', soft: 'rgba(201, 162, 39, 0.12)' },
  { name: 'forest', rgb: '58 90 64', soft: 'rgba(58, 90, 64, 0.12)' },
  { name: 'crimson', rgb: '180 60 60', soft: 'rgba(180, 60, 60, 0.12)' },
  { name: 'teal', rgb: '40 120 120', soft: 'rgba(40, 120, 120, 0.12)' },
];

export function useEasterEggs() {
  const [boardFlipped, setBoardFlipped] = useState(false);
  const [accentIndex, setAccentIndex] = useState(0);
  const [moveCount, setMoveCount] = useState(0);

  const flipBoard = useCallback(() => setBoardFlipped((v) => !v), []);

  // Apply accent CSS variables
  useEffect(() => {
    const a = ACCENTS[accentIndex];
    document.documentElement.style.setProperty('--accent', a.rgb);
    document.documentElement.style.setProperty('--accent-soft', a.soft);
  }, [accentIndex]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === 'c') {
        setBoardFlipped((v) => !v);
      }
      // Konami-ish: press "g g" to cycle accent
      if (e.key.toLowerCase() === 'g') {
        setAccentIndex((i) => (i + 1) % ACCENTS.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Move counter on scroll
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      setMoveCount(Math.floor(pct * 40));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { boardFlipped, flipBoard, accentIndex, accentName: ACCENTS[accentIndex].name, moveCount };
}
