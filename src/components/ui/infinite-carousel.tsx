"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface InfiniteCarouselProps {
  items: React.ReactNode[];
  autoplayDelay?: number;
}

export function InfiniteCarousel({ items, autoplayDelay = 2000 }: InfiniteCarouselProps) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % items.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [items.length, autoplayDelay]);

  // Duplicar items para efeito infinito suave
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden px-2 sm:px-0">
      <motion.div
        className="flex gap-3 sm:gap-4"
        animate={{ x: `-${position * (100 / items.length)}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ willChange: 'transform' }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
