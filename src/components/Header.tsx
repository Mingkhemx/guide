import React, { useState } from "react";
import { Bell, Sparkles, Download, Settings as SettingsIcon } from "lucide-react";
import { AppCity, ActiveTab } from "../types";
import { getPrayerTimesForCity } from "../lib/prayerTimes";

interface HeaderProps {
  currentCity: AppCity;
  onCityChange: (city: AppCity) => void;
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  isInstallable: boolean;
  onInstallClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCity,
  onCityChange,
  onNavigate,
  isInstallable,
  onInstallClick
}) => {
  const [showPrayerPopup, setShowPrayerPopup] = useState(false);
  const { nextPrayer, prayers } = getPrayerTimesForCity(currentCity);

  return (
    <header className="sticky top-0 w-full z-40 bg-[#f0fcf5]/90 backdrop-blur-xl border-b border-emerald-900/5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <div className="max-w-[480px] mx-auto h-16 px-4 flex items-center justify-between">
        {/* Left: Brand logo and title */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
          aria-label="Kembali ke beranda"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#004435] to-[#0b5d4b] p-1.5 shadow-[0_4px_12px_rgba(0,68,53,0.25)] flex items-center justify-center shrink-0 border border-emerald-300/30">
            <svg viewBox="0 0 512 512" className="w-full h-full object-contain">
              <g transform="translate(256, 260) scale(1.65)">
                <polygon points="-75,-50 0,-15 0,75 -75,40" fill="#141E1A" />
                <polygon points="0,-15 75,-50 75,40 0,75" fill="#0A0F0D" />
                <polygon points="-75,-50 0,-85 75,-50 0,-15" fill="#1F2A25" />
                <polygon points="-75,-25 0,10 0,22 -75,-13" fill="#D4AF37" />
                <polygon points="0,10 75,-25 75,-13 0,22" fill="#D4AF37" />
                <polygon points="18,-1 54,-18 54,20 18,36" fill="#FFE088" />
              </g>
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-2 ring-[#f0fcf5] animate-pulse" />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[17px] text-[#004435] tracking-tight truncate group-hover:text-[#006b56] transition-colors">
                Umrah Companion
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
            </div>
            <span className="text-[11px] font-medium text-[#3f4945] tracking-wider uppercase -mt-0.5">
              Digital Manasik Guide
            </span>
          </div>
        </button>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          {/* City selector pill */}
          <div className="relative">
            <button
              onClick={() => {
                const next: AppCity = currentCity === "Madinah" ? "Makkah" : currentCity === "Makkah" ? "Jakarta" : "Madinah";
                onCityChange(next);
              }}
              title="Ganti Kota & Waktu Shalat"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-[11px] font-semibold text-[#004435] hover:bg-emerald-200/70 transition-colors shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{currentCity}</span>
            </button>
          </div>

          {/* PWA install button if installable */}
          {isInstallable && (
            <button
              onClick={onInstallClick}
              className="p-2 rounded-full bg-[#D4AF37]/15 text-[#735c00] hover:bg-[#D4AF37]/30 transition-colors"
              title="Install Aplikasi ke HP"
              aria-label="Install Aplikasi"
            >
              <Download className="w-4 h-4" />
            </button>
          )}

          {/* Prayer reminder bell popup trigger */}
          <div className="relative">
            <button
              onClick={() => setShowPrayerPopup(!showPrayerPopup)}
              aria-label="Notifikasi dan Jadwal Shalat"
              className="relative p-2 rounded-full text-[#141e1a] hover:bg-emerald-100/50 hover:text-[#004435] transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4AF37] ring-2 ring-[#f0fcf5]" />
            </button>

            {/* Prayer reminder dropdown */}
            {showPrayerPopup && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowPrayerPopup(false)}
                />
                <div className="absolute right-0 mt-2 w-72 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-900/10 shadow-[0_16px_36px_rgba(11,93,75,0.18)] z-50 text-left">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                    <div>
                      <div className="text-xs font-bold text-[#004435]">
                        Waktu Shalat {currentCity}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        Berikutnya: <span className="font-semibold text-emerald-700">{nextPrayer.name}</span> ({nextPrayer.time})
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800">
                      {nextPrayer.statusLabel}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs">
                    {prayers.map((p) => (
                      <div
                        key={p.name}
                        className={`flex items-center justify-between py-1 px-2 rounded-lg ${
                          p.isNext
                            ? "bg-[#004435] text-white font-semibold"
                            : p.isPassed
                            ? "text-gray-400"
                            : "text-gray-700"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{p.name}</span>
                          <span className="text-[10px] font-arabic opacity-80">{p.nameArabic}</span>
                        </span>
                        <span>{p.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      Pengingat Adzan Aktif
                    </span>
                    <button
                      onClick={() => {
                        setShowPrayerPopup(false);
                        onNavigate("settings");
                      }}
                      className="text-[#004435] font-semibold hover:underline"
                    >
                      Pengaturan
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Settings button */}
          <button
            onClick={() => onNavigate("settings")}
            aria-label="Buka Pengaturan"
            className="p-2 rounded-full text-[#141e1a] hover:bg-emerald-100/50 hover:text-[#004435] transition-colors"
          >
            <SettingsIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
