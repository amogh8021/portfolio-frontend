import { useCallback, useEffect, useState } from "react";

const ACCENTS = [
  {
    name: "gold",
    rgb: "201 162 39",
    soft: "rgba(201,162,39,0.12)",
  },
  {
    name: "forest",
    rgb: "58 90 64",
    soft: "rgba(58,90,64,0.12)",
  },
  {
    name: "slate",
    rgb: "75 85 99",
    soft: "rgba(75,85,99,0.12)",
  },
  {
    name: "royal",
    rgb: "65 105 225",
    soft: "rgba(65,105,225,0.12)",
  },
] as const;

const STORAGE_KEY = "portfolio-accent";

const TOTAL_MOVES = 40;

export function useEasterEggs() {
  const [boardFlipped, setBoardFlipped] = useState(false);

  const [showHelp, setShowHelp] = useState(false);

  const [accentIndex, setAccentIndex] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      const index = Number(saved);

      if (!Number.isNaN(index) && index >= 0 && index < ACCENTS.length) {
        return index;
      }
    }

    return 0;
  });

  const [moveCount, setMoveCount] = useState(1);

  const flipBoard = useCallback(() => {
    setBoardFlipped((prev) => !prev);
  }, []);

  const cycleAccent = useCallback(() => {
    setAccentIndex((prev) => (prev + 1) % ACCENTS.length);
  }, []);

  // Apply Accent

  useEffect(() => {
    const accent = ACCENTS[accentIndex];

    document.documentElement.style.setProperty("--accent", accent.rgb);

    document.documentElement.style.setProperty(
      "--accent-soft",
      accent.soft
    );

    localStorage.setItem(STORAGE_KEY, accentIndex.toString());
  }, [accentIndex]);

  // Smooth Scroll Counter

  useEffect(() => {
    let ticking = false;

    const updateMove = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = max > 0 ? window.scrollY / max : 0;

      const move = Math.min(
        TOTAL_MOVES,
        Math.max(1, Math.round(progress * TOTAL_MOVES))
      );

      setMoveCount(move);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateMove);

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard Shortcuts

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case "c":
          flipBoard();
          break;

        case "g":
          cycleAccent();
          break;

        case "?":
          setShowHelp((v) => !v);
          break;

        case "escape":
          setShowHelp(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [flipBoard, cycleAccent]);

  return {
    boardFlipped,

    flipBoard,

    accentIndex,

    accentName: ACCENTS[accentIndex].name,

    moveCount,

    showHelp,

    setShowHelp,
  };
}