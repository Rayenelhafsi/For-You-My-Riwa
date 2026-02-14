import React, { useMemo } from "react";
import { motion } from "motion/react";

const PETAL_COUNT = 25;

const Petal = ({ index }: { index: number }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const delay = useMemo(() => Math.random() * 10, []);
  const duration = useMemo(() => 15 + Math.random() * 10, []);
  const size = useMemo(() => 15 + Math.random() * 15, []);
  const rotation = useMemo(() => Math.random() * 360, []);

  return (
    <motion.div
      initial={{ 
        top: "-10%", 
        left: `${randomX}%`, 
        rotate: rotation,
        opacity: 0 
      }}
      animate={{ 
        top: "110%", 
        left: `${randomX + (Math.random() * 20 - 10)}%`,
        rotate: rotation + 720,
        opacity: [0, 1, 1, 0]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
      className="fixed pointer-events-none z-0"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-rose-400 drop-shadow-sm"
      >
        <path
          d="M50 0C50 0 100 25 100 50C100 75 75 100 50 100C25 100 0 75 0 50C0 25 50 0 50 0Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </svg>
    </motion.div>
  );
};

export const PetalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: PETAL_COUNT }).map((_, i) => (
        <Petal key={i} index={i} />
      ))}
    </div>
  );
};
