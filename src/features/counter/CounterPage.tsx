import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import {
  RotateCcw,
  Plus,
  Minus,
  Sparkles,
  Compass,
  AlertCircle,
  History,
  CheckCircle2,
  Share2,
  Copy,
  Volume2
} from "lucide-react";
import { TAWAF_ROUNDS_DATA, RUKUN_YAMANI_DOA, AFTER_TAWAF_GUIDE } from "../../data/tawafData";
import { SAI_ROUNDS_DATA, SAI_START_DOA, HILL_SUNNAH_DOA, TAHALLUL_GUIDE } from "../../data/saiData";
import { triggerHaptic, playSpiritualChime } from "../../lib/audioSim";
import { CounterHistoryEntry } from "../../types";

interface CounterPageProps {
  history: CounterHistoryEntry[];
  onSaveHistory: (history: CounterHistoryEntry[]) => void;
}

export const CounterPage: React.FC<CounterPageProps> = ({ history, onSaveHistory }) => {
  const [activeMode, setActiveMode] = useState<"tawaf" | "sai">("tawaf");
  const [tawafRound, setTawafRound] = useState(0);
  const [saiRound, setSaiRound] = useState(0);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  const currentRound = activeMode === "tawaf" ? tawafRound : saiRound;
  const isFinished = currentRound >= 7;

  // Active round data
  const activeTawafData = TAWAF_ROUNDS_DATA[Math.max(0, Math.min(tawafRound - 1, 6))];
  const activeSaiData = SAI_ROUNDS_DATA[Math.max(0, Math.min(saiRound - 1, 6))];

  // Increment counter
  const handleIncrement = () => {
    if (currentRound >= 7) return;

    if (!startTime) {
      setStartTime(Date.now());
    }

    const nextRound = currentRound + 1;
    triggerHaptic("medium");
    playSpiritualChime("round_advance");

    if (activeMode === "tawaf") {
      setTawafRound(nextRound);
    } else {
      setSaiRound(nextRound);
    }

    // Finished 7 rounds celebration
    if (nextRound === 7) {
      triggerHaptic("success");
      playSpiritualChime("complete_nusuk");
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }

      // Record to history
      const newHistory: CounterHistoryEntry = {
        id: "hist-" + Date.now(),
        type: activeMode,
        completedRounds: 7,
        totalTarget: 7,
        startedAt: new Date(startTime || Date.now() - 3600000).toISOString(),
        completedAt: new Date().toISOString(),
        notes: `Alhamdulillah telah menyelesaikan 7 putaran ${activeMode === "tawaf" ? "Thawaf Ka'bah" : "Sa'i Shafa-Marwah"}.`
      };
      onSaveHistory([newHistory, ...history]);
    }
  };

  // Decrement counter
  const handleDecrement = () => {
    if (currentRound <= 0) return;
    triggerHaptic("light");
    playSpiritualChime("click");
    if (activeMode === "tawaf") {
      setTawafRound(currentRound - 1);
    } else {
      setSaiRound(currentRound - 1);
    }
  };

  // Reset counter
  const handleConfirmReset = () => {
    triggerHaptic("heavy");
    if (activeMode === "tawaf") {
      setTawafRound(0);
    } else {
      setSaiRound(0);
    }
    setStartTime(null);
    setShowResetConfirm(false);
  };

  // Copy prayer text
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    triggerHaptic("light");
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Calculate circular progress stroke for Tawaf (radius 70 => circumference 2*pi*70 ~= 440)
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentRound / 7) * circumference;

  return (
    <div className="w-full flex flex-col gap-4 px-4 max-w-[480px] mx-auto pb-28 pt-2">
      {/* Mode Switcher Pill (Tawaf vs Sa'i) */}
      <div className="p-1 rounded-2xl bg-white/90 backdrop-blur-md shadow-xs border border-emerald-900/10 grid grid-cols-2 gap-1">
        <button
          onClick={() => {
            setActiveMode("tawaf");
            triggerHaptic("light");
          }}
          className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            activeMode === "tawaf"
              ? "bg-[#004435] text-white shadow-sm"
              : "text-gray-600 hover:text-[#004435]"
          }`}
        >
          <span>🕋 Thawaf (Ka'bah)</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20">
            {tawafRound}/7
          </span>
        </button>

        <button
          onClick={() => {
            setActiveMode("sai");
            triggerHaptic("light");
          }}
          className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            activeMode === "sai"
              ? "bg-[#004435] text-white shadow-sm"
              : "text-gray-600 hover:text-[#004435]"
          }`}
        >
          <span>⛰️ Sa'i (Shafa-Marwah)</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20">
            {saiRound}/7
          </span>
        </button>
      </div>

      {/* TAWAF VIEW */}
      {activeMode === "tawaf" && (
        <>
          {/* Main Visual Orbit Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#00382b] via-[#004435] to-[#043328] text-white p-6 shadow-[0_16px_40px_rgba(11,93,75,0.22)] border border-emerald-400/20 flex flex-col items-center justify-center min-h-[340px]">
            {/* Ambient Background glows */}
            <div className="absolute w-56 h-56 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

            {/* Top Bar inside Card */}
            <div className="w-full flex items-center justify-between z-10 -mt-1 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/12 backdrop-blur-md text-[11px] font-bold text-[#FFE088] border border-white/10 uppercase tracking-wider">
                Penghitung Tawaf 7 Putaran
              </span>
              <button
                onClick={() => setShowHistoryModal(true)}
                className="p-1.5 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                title="Riwayat Tawaf"
              >
                <History className="w-4 h-4" />
              </button>
            </div>

            {/* Circular Orbit & Central Ka'bah Graphic */}
            <div className="relative w-52 h-52 flex items-center justify-center my-2">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background Track Circle */}
                <circle
                  cx="104"
                  cy="104"
                  r={radius}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="8"
                />
                {/* Dynamic Progress Orbit */}
                <circle
                  cx="104"
                  cy="104"
                  r={radius}
                  fill="none"
                  stroke="url(#goldGradTawaf)"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                />
                <defs>
                  <linearGradient id="goldGradTawaf" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE088" />
                    <stop offset="60%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8dd4bd" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Subtly Animated Central Ka'bah Perspective Illustration */}
              <motion.div
                animate={{
                  scale: currentRound > 0 ? [1, 1.05, 1] : 1,
                  rotate: [0, 0.5, -0.5, 0]
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="w-24 h-24 relative flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
                    {/* Ka'bah Body */}
                    <polygon points="40,65 100,90 100,165 40,140" fill="#141E1A" stroke="#28332E" strokeWidth="1.5" />
                    <polygon points="100,90 160,65 160,140 100,165" fill="#0A0F0D" stroke="#28332E" strokeWidth="1.5" />
                    <polygon points="40,65 100,40 160,65 100,90" fill="#1F2A25" stroke="#28332E" strokeWidth="1.5" />

                    {/* Kiswah Gold Belt (Hizam) */}
                    <polygon points="40,82 100,107 100,116 40,91" fill="#D4AF37" />
                    <polygon points="100,107 160,82 160,91 100,116" fill="#D4AF37" />

                    {/* Golden Door */}
                    <polygon points="112,98 144,85 144,124 112,137" fill="#FFE088" opacity="0.95" />
                    
                    {/* Hajar Aswad marker corner glow */}
                    <circle cx="100" cy="165" r="4" fill="#FFE088" className="animate-ping opacity-75" />
                    <circle cx="100" cy="165" r="3" fill="#FFE088" />
                  </svg>
                </div>
              </motion.div>

              {/* Moving Pilgrim Orbit Indicator */}
              <div
                className="absolute w-full h-full pointer-events-none transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${(currentRound / 7) * 360}deg)` }}
              >
                <div className="w-4 h-4 rounded-full bg-[#FFE088] shadow-[0_0_12px_#FFE088] border-2 border-[#004435] -mt-2 mx-auto" />
              </div>

              {/* Center Counter Badge */}
              <div className="absolute flex flex-col items-center justify-center pointer-events-none -mt-16">
                <span className="text-[10px] font-bold text-[#8dd4bd] tracking-widest uppercase">
                  Putaran Ke
                </span>
                <span className="text-4xl font-extrabold text-white tracking-tight leading-none mt-1">
                  {tawafRound}
                  <span className="text-xl text-white/50 font-normal">/7</span>
                </span>
              </div>
            </div>

            {/* Instruction Tip */}
            <div className="z-10 text-center mt-1">
              <p className="text-xs text-[#a9f1d9] font-medium">
                {tawafRound === 0 && "Berdiri sejajar garis Hajar Aswad, angkat tangan kanan (Istilam) lalu mulai putaran."}
                {tawafRound > 0 && tawafRound < 7 && `Sedang menempuh Putaran Ke-${tawafRound}. Perbanyak dzikir & doa.`}
                {tawafRound === 7 && "Alhamdulillah! 7 Putaran Tawaf selesai sempurna."}
              </p>
            </div>
          </div>

          {/* Stepper Buttons Control Panel */}
          <div className="flex items-center justify-between gap-3">
            {/* Decrement Button */}
            <button
              onClick={handleDecrement}
              disabled={tawafRound <= 0}
              className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-700 disabled:opacity-35 disabled:cursor-not-allowed active:scale-95 transition-all"
              aria-label="Kurang satu putaran"
            >
              <Minus className="w-5 h-5" />
            </button>

            {/* Big Main Increment Button */}
            <button
              onClick={handleIncrement}
              disabled={tawafRound >= 7}
              className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#004435] to-[#0b5d4b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(11,93,75,0.25)] hover:bg-[#00382b] active:scale-98 disabled:opacity-50 transition-all border border-emerald-400/20"
            >
              <Plus className="w-5 h-5" />
              <span>
                {tawafRound === 0
                  ? "Mulai Tawaf (Putaran 1)"
                  : tawafRound < 7
                  ? `Selesai Putaran Ke-${tawafRound} (+1)`
                  : "Tawaf Selesai (7/7)"}
              </span>
            </button>

            {/* Reset Button */}
            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 active:scale-95 transition-all"
              title="Reset hitungan putaran"
              aria-label="Reset hitungan putaran"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Guide Card for Current Tawaf Round */}
          {tawafRound > 0 && activeTawafData && (
            <div className="bg-white rounded-3xl p-5 shadow-[0_8px_28px_rgba(11,93,75,0.06)] border border-emerald-900/5 space-y-3.5 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <h4 className="font-bold text-sm text-[#004435]">
                    {activeTawafData.title}
                  </h4>
                </div>
                {/* Category Label: Strictly respecting guidelines */}
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#004435] text-[10px] font-bold uppercase">
                  {activeTawafData.type === "guide" && "Panduan Doa"}
                  {activeTawafData.type === "optional_prayer" && "Doa Pilihan"}
                  {activeTawafData.type === "dhikr" && "Dzikir"}
                </span>
              </div>

              {/* Arabic text with beautiful font */}
              {activeTawafData.arabic && (
                <div className="p-4 rounded-2xl bg-[#f0fcf5]/70 border border-emerald-100 text-right">
                  <p className="font-arabic text-xl leading-loose text-gray-900 dir-rtl">
                    {activeTawafData.arabic}
                  </p>
                </div>
              )}

              {/* Latin & Translation */}
              <div className="space-y-1.5 text-xs">
                {activeTawafData.latin && (
                  <p className="italic text-emerald-800 font-medium leading-relaxed">
                    "{activeTawafData.latin}"
                  </p>
                )}
                {activeTawafData.translation && (
                  <p className="text-gray-600 leading-relaxed">
                    Artinya: {activeTawafData.translation}
                  </p>
                )}
              </div>

              {/* Practical tips */}
              {activeTawafData.tips && (
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/50 text-[11px] text-amber-900 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{activeTawafData.tips}</span>
                </div>
              )}

              {/* Copy & Reference Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] text-gray-400">
                <span>{activeTawafData.reference}</span>
                <button
                  onClick={() => handleCopy(`${activeTawafData.arabic || ""}\n\n${activeTawafData.translation || ""}`)}
                  className="flex items-center gap-1 text-[#004435] font-semibold hover:underline"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedText ? "Tersalin!" : "Salin Doa"}</span>
                </button>
              </div>
            </div>
          )}

          {/* Special Sunnah Card: Rukun Yamani to Hajar Aswad */}
          <div className="bg-gradient-to-br from-emerald-50/80 to-white rounded-3xl p-4 shadow-xs border border-emerald-200/70 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs text-[#004435] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#006b56]" />
                <span>Doa Rukun Yamani - Hajar Aswad (Sunnah)</span>
              </h4>
              <span className="text-[10px] font-semibold text-emerald-700">Dibaca Tiap Putaran</span>
            </div>
            <p className="font-arabic text-lg text-right text-gray-900 dir-rtl pt-1">
              {RUKUN_YAMANI_DOA.arabic}
            </p>
            <p className="italic text-xs text-emerald-900 font-medium">
              "{RUKUN_YAMANI_DOA.latin}"
            </p>
            <p className="text-[11px] text-gray-600">
              Artinya: {RUKUN_YAMANI_DOA.translation}
            </p>
          </div>

          {/* Post-Tawaf Guide when finished 7/7 */}
          {tawafRound === 7 && (
            <div className="bg-white rounded-3xl p-5 shadow-lg border border-emerald-200 space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-sm text-[#004435]">
                  {AFTER_TAWAF_GUIDE.title}
                </h4>
              </div>
              <div className="space-y-2 text-xs">
                {AFTER_TAWAF_GUIDE.steps.map((st, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold text-gray-800 block mb-0.5">{st.title}</span>
                    <span className="text-gray-600">{st.desc}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  setActiveMode("sai");
                  triggerHaptic("medium");
                }}
                className="w-full py-2.5 rounded-xl bg-[#004435] text-white font-bold text-xs hover:bg-[#0b5d4b] transition-colors"
              >
                Lanjut ke Sa'i Shafa-Marwah &rarr;
              </button>
            </div>
          )}
        </>
      )}

      {/* SA'I VIEW */}
      {activeMode === "sai" && (
        <>
          {/* Main Visual Track Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#00382b] via-[#004435] to-[#043328] text-white p-5 shadow-[0_16px_40px_rgba(11,93,75,0.22)] border border-emerald-400/20 flex flex-col justify-between min-h-[340px]">
            {/* Ambient Background glows */}
            <div className="absolute w-56 h-56 rounded-full bg-[#8cd3bc]/10 blur-3xl pointer-events-none" />

            {/* Top Bar */}
            <div className="w-full flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-white/12 backdrop-blur-md text-[11px] font-bold text-[#FFE088] border border-white/10 uppercase tracking-wider">
                Penghitung Sa'i 7 Putaran
              </span>
              <button
                onClick={() => setShowHistoryModal(true)}
                className="p-1.5 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                title="Riwayat Sa'i"
              >
                <History className="w-4 h-4" />
              </button>
            </div>

            {/* Current Round & Dynamic Direction Indicator */}
            <div className="text-center z-10 py-3">
              <span className="text-xs font-semibold text-[#8dd4bd] tracking-widest uppercase">
                Putaran Sa'i Ke
              </span>
              <h2 className="text-5xl font-extrabold text-white tracking-tight my-1">
                {saiRound}
                <span className="text-2xl text-white/50 font-normal">/7</span>
              </h2>
              {/* Dynamic Direction Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mt-1">
                <span className="font-bold text-xs text-[#FFE088]">
                  {saiRound === 0
                    ? "Mulai dari Bukit Shafa"
                    : activeSaiData
                    ? `Arah: ${activeSaiData.from} ➔ ${activeSaiData.to}`
                    : "Selesai di Marwah"}
                </span>
              </div>
            </div>

            {/* Horizontal Journey Track Visualization */}
            <div className="relative w-full z-10 px-2 py-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between text-[11px] font-bold mb-2">
                <span className="flex items-center gap-1 text-[#FFE088]">
                  <span className="w-2 h-2 rounded-full bg-[#FFE088]" />
                  Shafa
                </span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold">
                  Jalur Mas'a
                </span>
                <span className="flex items-center gap-1 text-[#a9f1d9]">
                  Marwah
                  <span className="w-2 h-2 rounded-full bg-[#a9f1d9]" />
                </span>
              </div>

              {/* The Path Bar with Green Zone Highlighted */}
              <div className="relative h-4 rounded-full bg-black/40 overflow-hidden flex items-center">
                {/* Green Marker Zone */}
                <div
                  className="absolute left-[35%] right-[35%] h-full bg-emerald-400/70 border-x-2 border-emerald-200"
                  title="Zona Lampu Hijau (Lari Kecil Pria)"
                />
                
                {/* Moving Runner Icon on the Track */}
                <motion.div
                  animate={{
                    left:
                      saiRound === 0
                        ? "5%"
                        : activeSaiData?.from === "Shafa"
                        ? `${15 + (saiRound % 2 ? 65 : 15)}%`
                        : "25%"
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-1 w-6 h-6 rounded-full bg-[#FFE088] shadow-[0_0_12px_#FFE088] border-2 border-[#004435] flex items-center justify-center text-[11px] -ml-3"
                >
                  🚶
                </motion.div>
              </div>

              {/* Green Zone Label below */}
              <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-emerald-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Area Pilar Lampu Hijau di Tengah Mas'a</span>
              </div>
            </div>

            {/* Male Instruction Banner */}
            <div className="z-10 mt-3 p-2.5 rounded-xl bg-emerald-800/40 border border-emerald-400/30 text-center text-xs text-[#a9f1d9]">
              <span className="font-bold text-white">Anjuran Pria:</span> "Lari-lari kecil di antara tanda pilar hijau" (Wanita berjalan biasa).
            </div>
          </div>

          {/* Stepper Buttons Control Panel */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handleDecrement}
              disabled={saiRound <= 0}
              className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-700 disabled:opacity-35 disabled:cursor-not-allowed active:scale-95 transition-all"
              aria-label="Kurang satu putaran Sa'i"
            >
              <Minus className="w-5 h-5" />
            </button>

            <button
              onClick={handleIncrement}
              disabled={saiRound >= 7}
              className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#004435] to-[#0b5d4b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(11,93,75,0.25)] hover:bg-[#00382b] active:scale-98 disabled:opacity-50 transition-all border border-emerald-400/20"
            >
              <Plus className="w-5 h-5" />
              <span>
                {saiRound === 0
                  ? "Mulai Sa'i (Putaran 1: Shafa ke Marwah)"
                  : saiRound < 7
                  ? `Selesai Putaran ${saiRound} (+1)`
                  : "Sa'i Selesai di Marwah (7/7)"}
              </span>
            </button>

            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 active:scale-95 transition-all"
              title="Reset hitungan Sa'i"
              aria-label="Reset hitungan Sa'i"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Doa & Dzikir Guidance for Current Sa'i Round */}
          {saiRound > 0 && activeSaiData && (
            <div className="bg-white rounded-3xl p-5 shadow-[0_8px_28px_rgba(11,93,75,0.06)] border border-emerald-900/5 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-[#004435]">
                  {activeSaiData.title}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#004435] text-[10px] font-bold">
                  Doa Pilihan Sa'i
                </span>
              </div>

              {activeSaiData.arabic && (
                <div className="p-4 rounded-2xl bg-[#f0fcf5]/70 border border-emerald-100 text-right">
                  <p className="font-arabic text-xl leading-loose text-gray-900 dir-rtl">
                    {activeSaiData.arabic}
                  </p>
                </div>
              )}

              {activeSaiData.latin && (
                <p className="italic text-xs text-emerald-800 font-medium">
                  "{activeSaiData.latin}"
                </p>
              )}

              {activeSaiData.translation && (
                <p className="text-xs text-gray-600 leading-relaxed">
                  Artinya: {activeSaiData.translation}
                </p>
              )}

              {/* Green Zone Specific Prayer Box */}
              {activeSaiData.duaGreenZone && (
                <div className="p-3.5 rounded-2xl bg-emerald-100/70 border border-emerald-300/60 space-y-1.5 text-xs text-[#004435]">
                  <span className="font-bold text-[11px] flex items-center gap-1 text-emerald-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Doa di Lampu Hijau:
                  </span>
                  <p className="font-arabic text-lg text-right text-gray-900 dir-rtl">
                    {activeSaiData.duaGreenZone.arabic}
                  </p>
                  <p className="italic text-[11px] text-emerald-900">
                    "{activeSaiData.duaGreenZone.latin}"
                  </p>
                  <p className="text-[10px] text-gray-700">
                    Artinya: {activeSaiData.duaGreenZone.translation}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tahallul Guide when finishing 7/7 at Marwah */}
          {saiRound === 7 && (
            <div className="bg-white rounded-3xl p-5 shadow-lg border border-emerald-300 space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-sm text-[#004435]">
                  {TAHALLUL_GUIDE.title}
                </h4>
              </div>
              <p className="font-arabic text-lg text-right text-gray-900 dir-rtl">
                {TAHALLUL_GUIDE.arabic}
              </p>
              <p className="italic text-xs text-emerald-800">
                "{TAHALLUL_GUIDE.latin}"
              </p>
              <div className="space-y-1.5 text-xs text-gray-600 pt-1 border-t border-gray-100">
                {TAHALLUL_GUIDE.instructions.map((ins, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{ins}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Accidental Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl border border-gray-100 text-left">
            <div className="flex items-center gap-2.5 text-amber-600 mb-2">
              <AlertCircle className="w-5 h-5" />
              <h4 className="font-bold text-sm text-gray-900">
                Reset Hitungan Putaran?
              </h4>
            </div>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Anda sedang berada di putaran ke-{currentRound} {activeMode === "tawaf" ? "Tawaf" : "Sa'i"}. Yakin ingin mengulang kembali dari putaran ke-0?
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
              >
                Batalkan
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-sm"
              >
                Ya, Reset ke 0
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History Log Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl border border-gray-100 text-left max-h-[75vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <h4 className="font-bold text-sm text-[#004435] flex items-center gap-2">
                <History className="w-4 h-4" />
                <span>Riwayat Tawaf &amp; Sa'i Tersimpan</span>
              </h4>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="text-xs font-semibold text-gray-500 hover:text-gray-900"
              >
                Tutup
              </button>
            </div>

            {history.length === 0 ? (
              <p className="text-xs text-gray-500 text-center py-6">
                Belum ada riwayat putaran yang tersimpan. Putaran 7/7 akan otomatis tercatat di sini.
              </p>
            ) : (
              <div className="space-y-2.5">
                {history.map((hist) => (
                  <div key={hist.id} className="p-3 rounded-2xl bg-gray-50 border border-gray-200/70 text-xs">
                    <div className="flex items-center justify-between font-bold text-[#004435] mb-1">
                      <span>{hist.type === "tawaf" ? "Tawaf Ka'bah 7 Putaran" : "Sa'i Shafa-Marwah 7 Putaran"}</span>
                      <span className="text-[11px] text-gray-500 font-normal">
                        {new Date(hist.completedAt || hist.startedAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </span>
                    </div>
                    <p className="text-gray-600 text-[11px]">{hist.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
