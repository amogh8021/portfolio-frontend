type PieceProps = { className?: string };

export function King({ className = '' }: PieceProps) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22.5 11.6V6.5M20 8.5h5" />
      <path d="M22.5 25c-2.5 0-4.5-2-4.5-4.5 0-1.5.8-2.8 2-3.6-1.2-.6-2-1.8-2-3.3 0-2 1.6-3.6 3.6-3.6.3 0 .6 0 .9.1-.2-.3-.3-.6-.3-1 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 .4-.1.7-.3 1 .3-.1.6-.1.9-.1 2 0 3.6 1.6 3.6 3.6 0 1.5-.8 2.7-2 3.3 1.2.8 2 2.1 2 3.6 0 2.5-2 4.5-4.5 4.5z" />
      <path d="M13 31h19M14 31c0 4 2 8 8.5 8s8.5-4 8.5-8" />
    </svg>
  );
}

export function Queen({ className = '' }: PieceProps) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="12" r="2" />
      <circle cx="17" cy="8" r="2" />
      <circle cx="28" cy="8" r="2" />
      <circle cx="39" cy="12" r="2" />
      <path d="M6 14l4.5 11M17 10l1.5 15M28 10l-1.5 15M39 14l-4.5 11" />
      <path d="M9 25h27M10 25c0 4 2 8 12.5 8s12.5-4 12.5-8" />
    </svg>
  );
}

export function Knight({ className = '' }: PieceProps) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 10c-4 0-7 3-7 7 0 2 1 4 2 5-3 1-6 4-6 9h18c0-5-1-9-3-12 2-1 3-3 3-5 0-2-2-4-4-4-1 0-2 .5-3 0z" />
      <path d="M8 36h29M9 36c0 2 2 4 13.5 4S34 38 34 36" />
      <circle cx="19" cy="14" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function Pawn({ className = '' }: PieceProps) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="22.5" cy="13" r="4" />
      <path d="M22.5 17c-3 0-5 2-5 5 0 2 1 3 2 4-3 1-5 3-5 6h16c0-3-2-5-5-6 1-1 2-2 2-4 0-3-2-5-5-5z" />
      <path d="M11 36h23M12 36c0 2 2 4 10.5 4S33 38 33 36" />
    </svg>
  );
}

export function Rook({ className = '' }: PieceProps) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 10v5M19 10v5M26 10v5M32 10v5" />
      <path d="M11 10h23v5h-23z" />
      <path d="M14 15v8M31 15v8M14 23h17" />
      <path d="M11 23h23v3h-23z" />
      <path d="M12 26v6M33 26v6M12 32h21" />
      <path d="M9 32h27v4H9z" />
    </svg>
  );
}

export function Bishop({ className = '' }: PieceProps) {
  return (
    <svg viewBox="0 0 45 45" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22.5 8c-2 0-3.5 1.5-3.5 3.5 0 1 .5 2 1.5 2.5-2 1-3.5 3-3.5 6h11c0-3-1.5-5-3.5-6 1-.5 1.5-1.5 1.5-2.5 0-2-1.5-3.5-3.5-3.5z" />
      <path d="M22.5 20v8" />
      <path d="M14 28h17M15 28c0 4 2 7 7.5 7s7.5-3 7.5-7" />
      <path d="M11 35h23M12 35c0 2 2 4 10.5 4S33 37 33 35" />
    </svg>
  );
}
