import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Music, Stars, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { PetalBackground } from "./components/PetalBackground";
import { BloomingRose } from "./components/BloomingRose";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { MemoryCarousel } from "./components/MemoryCarousel";
import song from "@/assets/song.mp3";

export default function App() {
  const [isBloomed, setIsBloomed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleBloom = () => {
    setIsBloomed(true);
    audioRef.current?.play();
    setTimeout(() => {
      setShowMessage(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e11d48", "#fb7185", "#f43f5e", "#fda4af"],
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-rose-50 flex flex-col items-center justify-center p-4 relative overflow-hidden font-['Playfair_Display']">
      <audio ref={audioRef} src={song} loop />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1626572013557-0eb3f2422fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHJvc2UlMjBiYWNrZ3JvdW5kJTIwYm9rZWh8ZW58MXx8fHwxNzcwNDQ1NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Romantic Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/80" />
      </div>

      <PetalBackground />

      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        <AnimatePresence>
          {!isBloomed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg text-rose-100">
                A Special Rose For You My Queen Riwa
              </h1>
              <p className="text-xl md:text-2xl text-rose-200/80 italic font-['Dancing_Script']">
                Just for the one who makes my heart skip a
                beat...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="relative cursor-pointer group"
          onClick={handleBloom}
        >
          <BloomingRose isBloomed={isBloomed} />

          {!isBloomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-rose-500/20 backdrop-blur-md px-6 py-2 rounded-full border border-rose-400/30 flex items-center gap-2 group-hover:bg-rose-500/30 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-rose-300" />
              <span className="text-rose-100 uppercase tracking-widest text-sm font-semibold">
                Tap to Bloom
              </span>
              <Sparkles className="w-4 h-4 text-rose-300" />
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 space-y-6"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 1] }}
                className="inline-block bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl relative"
              >
                <div className="absolute -top-6 -right-6">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                  >
                    <Heart className="w-12 h-12 text-rose-500 fill-rose-500 drop-shadow-lg" />
                  </motion.div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-rose-100 mb-4 font-['Dancing_Script']">
                  Happy Valentine's Day My soulmate
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-rose-50/90 italic">
                  "My Dearest Queen Riwa,
                  <br />
                  Happy Valentine's Day, my love 🌹
                  <br />
                  You are the most beautiful chapter of my life.
                  <br />
                  Every day with you is a celebration of love and happiness.
                  <br />
                  Thank you for being my soulmate and my forever.
                  <br />
                  I love you infinitely ❤️"
                  <br />
                  Always and Forever
                </p>

                <div className="mt-8 flex justify-center gap-6">
                  <div className="flex flex-col items-center gap-1">
                    <div className="p-3 bg-rose-500/20 rounded-full">
                      <Stars className="w-6 h-6 text-rose-300" />
                    </div>
                    <span className="text-xs uppercase tracking-tighter text-rose-300/70">
                      Always
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="p-3 bg-rose-500/20 rounded-full">
                      <Music className="w-6 h-6 text-rose-300" />
                    </div>
                    <span className="text-xs uppercase tracking-tighter text-rose-300/70">
                      Forever
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="p-3 bg-rose-500/20 rounded-full">
                      <Heart className="w-6 h-6 text-rose-300 fill-rose-300/30" />
                    </div>
                    <span className="text-xs uppercase tracking-tighter text-rose-300/70">
                      Together
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MemoryCarousel />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap justify-center gap-4 pt-4"
              >
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm uppercase tracking-widest text-rose-200"
                >
                  See it again
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Decorative corners */}
      <div className="fixed top-0 left-0 p-8 opacity-20 pointer-events-none">
        <div className="w-32 h-32 border-t-2 border-l-2 border-rose-300 rounded-tl-3xl" />
      </div>
      <div className="fixed bottom-0 right-0 p-8 opacity-20 pointer-events-none">
        <div className="w-32 h-32 border-b-2 border-r-2 border-rose-300 rounded-br-3xl" />
      </div>
    </div>
  );
}