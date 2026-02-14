import React from "react";
import { motion } from "motion/react";

export const BloomingRose = ({ isBloomed }: { isBloomed: boolean }) => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Stem */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 200 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 w-2 bg-green-600 rounded-full"
        style={{ originY: 1 }}
      />
      
      {/* Leaves */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: isBloomed ? 1 : 0, rotate: -45 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-24 -left-6 w-12 h-6 bg-green-500 rounded-full origin-right"
      />
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: isBloomed ? 1 : 0, rotate: 45 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-32 -right-6 w-12 h-6 bg-green-500 rounded-full origin-left"
      />

      {/* Rose Head */}
      <div className="relative mb-20">
        {/* Outer Petals */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.div
            key={`outer-${i}`}
            initial={{ scale: 0, rotate: angle }}
            animate={{ 
              scale: isBloomed ? 1 : 0, 
              rotate: isBloomed ? angle : angle + 20,
              y: isBloomed ? 0 : 20
            }}
            transition={{ 
              delay: 1 + i * 0.1, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="absolute -inset-12 bg-rose-600 rounded-full opacity-80"
            style={{ 
              borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
              transformOrigin: "center bottom"
            }}
          />
        ))}

        {/* Middle Petals */}
        {[36, 108, 180, 252, 324].map((angle, i) => (
          <motion.div
            key={`mid-${i}`}
            initial={{ scale: 0, rotate: angle }}
            animate={{ 
              scale: isBloomed ? 0.8 : 0, 
              rotate: isBloomed ? angle : angle - 20,
              y: isBloomed ? 0 : 10
            }}
            transition={{ 
              delay: 1.5 + i * 0.1, 
              duration: 0.8,
              type: "spring"
            }}
            className="absolute -inset-10 bg-rose-500 rounded-full opacity-90"
            style={{ 
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              transformOrigin: "center bottom"
            }}
          />
        ))}

        {/* Inner Petals / Core */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isBloomed ? 0.6 : 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute -inset-6 bg-rose-400 rounded-full shadow-inner"
          style={{ 
            borderRadius: "50%",
            background: "radial-gradient(circle, #fb7185 0%, #e11d48 100%)"
          }}
        />
      </div>
    </div>
  );
};
