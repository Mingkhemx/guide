import React, { useState } from "react";
import {
  Play,
  Pause,
  RotateCw,
  Volume2,
  MapPin,
  AlertTriangle,
  Info,
  CheckCircle2,
  Copy,
  Sparkles
} from "lucide-react";
import { NIAT_ITEMS_DATA, TALBIYAH_DATA, MIQAT_LOCATIONS, IHRAM_PROHIBITIONS } from "../../data/niatData";
import { triggerHaptic, playSpiritualChime } from "../../lib/audioSim";

export const NiatPage: React.FC = () => {
  const [isPlayingTalbiyah, setIsPlayingTalbiyah] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [activeTab, setActiveTab] = useState<"niat" | "talbiyah" | "miqat" | "larangan">("niat");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Audio simulator for talbiyah
  const handleToggleTalbiyah = () => {
    triggerHaptic("medium");
    if (isPlayingTalbiyah) {
      setIsPlayingTalbiyah(false);
    } else {
      setIsPlayingTalbiyah(true);
      playSpiritualChime("round_advance");
      // Simulated playback cycle
      setTimeout(() => {
        if (!isLooping) setIsPlayingTalbiyah(false);
      }, 10000);
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    triggerHaptic("light");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-4 px-4 max-w-[480px] mx-auto pb-28 pt-2">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-[#004435] tracking-tight">
          Niat &amp; Talbiyah
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Panduan niat Miqat, gema talbiyah, dan pantangan kain ihram
        </p>
      </div>

      {/* Sub-tabs switch */}
      <div className="p-1 rounded-2xl bg-white/90 backdrop-blur-md shadow-xs border border-emerald-900/10 grid grid-cols-4 gap-1 text-[11px] font-bold">
        <button
          onClick={() => {
            setActiveTab("niat");
            triggerHaptic("light");
          }}
          className={`py-2 rounded-xl transition-all ${
            activeTab === "niat" ? "bg-[#004435] text-white shadow-xs" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Niat
        </button>
        <button
          onClick={() => {
            setActiveTab("talbiyah");
            triggerHaptic("light");
          }}
          className={`py-2 rounded-xl transition-all ${
            activeTab === "talbiyah" ? "bg-[#004435] text-white shadow-xs" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Talbiyah
        </button>
        <button
          onClick={() => {
            setActiveTab("miqat");
            triggerHaptic("light");
          }}
          className={`py-2 rounded-xl transition-all ${
            activeTab === "miqat" ? "bg-[#004435] text-white shadow-xs" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Miqat
        </button>
        <button
          onClick={() => {
            setActiveTab("larangan");
            triggerHaptic("light");
          }}
          className={`py-2 rounded-xl transition-all ${
            activeTab === "larangan" ? "bg-[#004435] text-white shadow-xs" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Larangan
        </button>
      </div>

      {/* 1. NIAT TAB */}
      {activeTab === "niat" && (
        <div className="space-y-4">
          {NIAT_ITEMS_DATA.map((niat) => (
            <div
              key={niat.id}
              className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-emerald-900/5 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#004435] text-[10px] font-bold uppercase">
                    {niat.type === "standard" ? "Niat Utama" : "Niat Bersyarat (Isytirath)"}
                  </span>
                  <h3 className="font-bold text-sm text-[#004435] mt-1">
                    {niat.title}
                  </h3>
                </div>
                <button
                  onClick={() => handleCopy(`${niat.arabic}\n\n"${niat.latin}"\n\nArtinya: ${niat.translation}`, niat.id)}
                  className="text-xs text-gray-400 hover:text-[#004435] flex items-center gap-1 font-semibold"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedKey === niat.id ? "Tersalin" : "Salin"}</span>
                </button>
              </div>

              {/* Arabic Box */}
              <div className="p-4 rounded-2xl bg-[#f0fcf5]/70 border border-emerald-100 text-right">
                <p className="font-arabic text-2xl leading-loose text-gray-900 dir-rtl">
                  {niat.arabic}
                </p>
              </div>

              {/* Latin */}
              <p className="italic text-xs text-emerald-900 font-medium">
                "{niat.latin}"
              </p>

              {/* Translation */}
              <p className="text-xs text-gray-600 leading-relaxed">
                Artinya: {niat.translation}
              </p>

              {/* Description & Condition */}
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/50 text-[11px] text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p>{niat.description}</p>
                  {niat.condition && (
                    <p className="mt-1 font-medium text-amber-950">
                      Keadaan khusus: {niat.condition}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. TALBIYAH TAB */}
      {activeTab === "talbiyah" && (
        <div className="space-y-4">
          {/* Main Talbiyah Player Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#004435] via-[#0b5d4b] to-[#043328] text-white p-6 shadow-[0_16px_40px_rgba(11,93,75,0.22)] border border-emerald-400/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/12 backdrop-blur-md text-[11px] font-bold text-[#FFE088] border border-white/10 uppercase tracking-wider">
                Lafadz Talbiyah Sunnah
              </span>
              <span className="text-xs text-[#a9f1d9] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FFE088]" />
                Sunnah Dijahrkan (Pria)
              </span>
            </div>

            {/* Arabic */}
            <div className="text-right py-2">
              <p className="font-arabic text-2xl sm:text-3xl leading-loose text-white dir-rtl">
                {TALBIYAH_DATA.arabic}
              </p>
            </div>

            {/* Latin */}
            <p className="italic text-xs text-[#a9f1d9] leading-relaxed">
              "{TALBIYAH_DATA.latin}"
            </p>

            {/* Translation */}
            <p className="text-xs text-white/80 leading-relaxed border-t border-white/10 pt-3">
              Artinya: {TALBIYAH_DATA.translation}
            </p>

            {/* Interactive Audio Player Controls */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={handleToggleTalbiyah}
                className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#241a00] font-bold text-xs flex items-center gap-2 hover:bg-[#FFE088] transition-all shadow-md active:scale-95"
              >
                {isPlayingTalbiyah ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Jeda Talbiyah</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Lantunkan Talbiyah</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsLooping(!isLooping);
                  triggerHaptic("light");
                }}
                className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  isLooping ? "bg-white/20 border-white/30 text-white font-semibold" : "text-white/60 border-transparent"
                }`}
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Ulangi Terus</span>
              </button>
            </div>
          </div>

          {/* Guide when to recite */}
          <div className="bg-white rounded-3xl p-5 shadow-xs border border-emerald-900/5 space-y-3">
            <h4 className="font-bold text-sm text-[#004435]">
              Waktu Melantunkan Talbiyah
            </h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  Dimulai sejak selesai berniat Ihram di Miqat dan menaiki kendaraan menuju Makkah.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  Disunnahkan dibaca setiap berganti keadaan (saat naik bukit, turun lembah, bertemu rombongan, atau seusai shalat fardhu).
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Kapan Berhenti?</strong> Lantunan talbiyah resmi dihentikan tepat ketika mulai melangkah untuk Thawaf pertama di Ka'bah (Hajar Aswad).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. MIQAT TAB */}
      {activeTab === "miqat" && (
        <div className="space-y-3">
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200/50 text-xs text-emerald-900 flex items-start gap-2">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p>
              <strong>Miqat Makani:</strong> Batas tempat dimulainya niat dan berlakunya larangan ihram. Melewati Miqat tanpa niat mewajibkan denda (Dam 1 ekor kambing).
            </p>
          </div>

          {MIQAT_LOCATIONS.map((mq) => (
            <div
              key={mq.name}
              className="bg-white rounded-3xl p-4 shadow-xs border border-emerald-900/5 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#004435] flex items-center justify-center font-bold text-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#004435]">{mq.name}</h4>
                    <span className="text-[10px] text-gray-500 font-medium">
                      Jarak: {mq.distance} dari Makkah
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">{mq.designation}</p>
              <p className="text-[11px] text-emerald-800 bg-emerald-50/70 p-2 rounded-xl">
                Catatan: {mq.notes}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 4. LARANGAN IHRAM TAB */}
      {activeTab === "larangan" && (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <p>
              Pelanggaran terhadap larangan ihram dapat membatalkan umrah atau mewajibkan tebusan Fidyah / Dam sesuai ketentuan syariat.
            </p>
          </div>

          {IHRAM_PROHIBITIONS.map((grp) => (
            <div
              key={grp.category}
              className="bg-white rounded-3xl p-5 shadow-xs border border-emerald-900/5 space-y-3"
            >
              <h4 className="font-bold text-xs text-[#004435] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>{grp.category}</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-700">
                {grp.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span className="leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
