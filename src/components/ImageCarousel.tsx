// src/components/ImageCarousel.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Animation configurations
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
    
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

// Drag strength configuration
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface ImageCarouselProps {
  images: string[];
  alt: string;
  accentColorClass?: string; // Optional: To style controls
}

export default function ImageCarousel({ images, alt, accentColorClass = "text-gold" }: ImageCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  // Handle indexing when looping back/forward
  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // If only one image, don't show carousel behavior
  if (images.length <= 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          alt={`${alt} - Image ${imageIndex + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute h-full w-full object-cover cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between z-10 px-4 pointer-events-none">
        <button
          onClick={() => paginate(-1)}
          className={`pointer-events-auto p-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white transition-all shadow ${accentColorClass}`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className={`pointer-events-auto p-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white transition-all shadow ${accentColorClass}`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
            className={`h-2 w-2 rounded-full transition-all ${
              index === imageIndex ? `bg-white scale-125` : `bg-white/50`
            }`}
          />
        ))}
      </div>
    </div>
  );
}