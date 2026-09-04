import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#002b21] via-[#004435] to-[#084739] text-white p-6"
        >
          {/* Ambient luminous glow circles */}
          <div className="absolute w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
          <div className="absolute w-60 h-60 rounded-full bg-[#8dd4bd]/10 blur-2xl pointer-events-none -top-12" />

          {/* Emblem Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-[#0b5d4b] to-[#002b21] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#D4AF37]/30 flex items-center justify-center mb-6"
          >
            <svg viewBox="0 0 512 512" className="w-full h-full object-contain">
              <g transform="translate(256, 260) scale(1.6)">
                <polygon points="-75,-50 0,-15 0,75 -75,40" fill="#141E1A" />
                <polygon points="0,-15 75,-50 75,40 0,75" fill="#0A0F0D" />
                <polygon points="-75,-50 0,-85 75,-50 0,-15" fill="#1F2A25" />
                <polygon points="-75,-25 0,10 0,22 -75,-13" fill="#D4AF37" />
                <polygon points="0,10 75,-25 75,-13 0,22" fill="#D4AF37" />
                <polygon points="18,-1 54,-18 54,20 18,36" fill="#FFE088" />
              </g>
            </svg>
            {/* Pulsing halo */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl border border-[#D4AF37]/40 pointer-events-none"
            />
          </motion.div>

          {/* Bismillah calligraphy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-arabic text-2xl text-[#FFE088] mb-2 tracking-wide text-center"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-2xl font-extrabold tracking-tight text-white mb-1.5"
          >
            UMRAH COMPANION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xs uppercase tracking-widest text-[#a9f1d9] font-medium"
          >
            Digital Manasik Guide &amp; Travel Companion
          </motion.p>

          {/* Bottom subtle progress indicator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#8dd4bd] rounded-full mt-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
