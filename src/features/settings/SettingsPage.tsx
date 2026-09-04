import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Bell,
  Volume2,
  Vibrate,
  Download,
  Database,
  Trash2,
  CheckCircle2,
  MapPin,
  Calendar,
  Info,
  ShieldCheck
} from "lucide-react";
import { AppCity, AppSettings } from "../../types";
import { triggerHaptic, playSpiritualChime } from "../../lib/audioSim";

interface SettingsPageProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  isInstallable: boolean;
  isInstalled: boolean;
  onInstall: () => void;
  onOpenSyncModal: () => void;
  onResetAllData: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  settings,
  onUpdateSettings,
  isInstallable,
  isInstalled,
  onInstall,
  onOpenSyncModal,
  onResetAllData
}) => {
  const [resetConfirm, setResetConfirm] = useState(false);

  const handleToggle = (key: keyof AppSettings) => {
    triggerHaptic("light");
    onUpdateSettings({
      ...settings,
      [key]: !settings[key]
    });
  };

  const handleCityChange = (city: AppCity) => {
    triggerHaptic("light");
    onUpdateSettings({
      ...settings,
      currentCity: city
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 px-4 max-w-[480px] mx-auto pb-28 pt-2">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-[#004435] tracking-tight">
          Pengaturan Aplikasi
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Kustomisasi jadwal shalat, audio, getaran, dan penyimpanan data
        </p>
      </div>

      {/* Location & Journey Configuration Card */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-emerald-900/5 space-y-4">
        <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400">
          Lokasi &amp; Hari Ibadah
        </h3>

        <div className="space-y-3 text-xs">
          <div>
            <label className="block text-gray-700 font-semibold mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Kota Ibadah Aktif (Jadwal Shalat)</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["Madinah", "Makkah", "Jakarta"] as AppCity[]).map((city) => (
                <button
                  key={city}
                  onClick={() => handleCityChange(city)}
                  className={`py-2 px-2 rounded-xl font-bold text-xs border transition-all ${
                    settings.currentCity === city
                      ? "bg-[#004435] text-white border-[#004435] shadow-xs"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-emerald-50"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preferences (Audio, Haptic, Notifications) */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-emerald-900/5 space-y-4">
        <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400">
          Preferensi Perangkat
        </h3>

        <div className="space-y-3.5 text-xs text-gray-800">
          {/* Notification */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#004435] flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold block">Pengingat Waktu Shalat</span>
                <span className="text-[11px] text-gray-500">Notifikasi adzan sebelum masuk waktu</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.notificationsEnabled}
              onChange={() => handleToggle("notificationsEnabled")}
              className="w-4 h-4 accent-[#004435] rounded cursor-pointer"
            />
          </div>

          {/* Sound */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#004435] flex items-center justify-center">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold block">Efek Suara Spiritual</span>
                <span className="text-[11px] text-gray-500">Dentang bel lembut saat putaran bertambah</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={() => handleToggle("soundEnabled")}
              className="w-4 h-4 accent-[#004435] rounded cursor-pointer"
            />
          </div>

          {/* Haptic */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#004435] flex items-center justify-center">
                <Vibrate className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold block">Getaran Haptik (Vibration)</span>
                <span className="text-[11px] text-gray-500">Umpan balik sentuhan saat tombol ditekan</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.hapticEnabled}
              onChange={() => handleToggle("hapticEnabled")}
              className="w-4 h-4 accent-[#004435] rounded cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* PWA & Cloud Integration */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-emerald-900/5 space-y-4">
        <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400">
          PWA &amp; Sinkronisasi Cloud
        </h3>

        <div className="space-y-3 text-xs">
          {/* PWA Install */}
          <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Download className="w-4 h-4 text-[#004435]" />
              <div>
                <span className="font-bold block">Status PWA Offline</span>
                <span className="text-[11px] text-gray-500">
                  {isInstalled ? "Aplikasi Terpasang (Standalone)" : "Dapat Diinstall ke Layar HP"}
                </span>
              </div>
            </div>
            {isInstallable ? (
              <button
                onClick={onInstall}
                className="px-3 py-1.5 rounded-xl bg-[#004435] text-white font-bold text-xs hover:bg-[#0b5d4b]"
              >
                Install
              </button>
            ) : isInstalled ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Aktif
              </span>
            ) : (
              <span className="text-gray-400">Siap Cache</span>
            )}
          </div>

          {/* Supabase Schema */}
          <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Database className="w-4 h-4 text-[#004435]" />
              <div>
                <span className="font-bold block text-[#004435]">Skema Database Supabase</span>
                <span className="text-[11px] text-gray-600">
                  SQL Table siap pakai untuk sinkronisasi cloud
                </span>
              </div>
            </div>
            <button
              onClick={onOpenSyncModal}
              className="px-3 py-1.5 rounded-xl bg-white border border-emerald-300 text-[#004435] font-bold text-xs hover:bg-emerald-50"
            >
              Lihat SQL
            </button>
          </div>
        </div>
      </div>

      {/* Data Management & Danger Zone */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-emerald-900/5 space-y-3">
        <h3 className="font-bold text-xs uppercase tracking-wider text-red-600">
          Reset Data Lokal
        </h3>
        <p className="text-xs text-gray-600">
          Menghapus seluruh riwayat putaran tawaf, checklist perjalanan, dan mengembalikan catatan doa ke setelan awal.
        </p>

        {resetConfirm ? (
          <div className="p-3 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between gap-2">
            <span className="text-xs text-red-800 font-semibold">Yakin hapus semua?</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setResetConfirm(false)}
                className="px-3 py-1 rounded-lg text-xs bg-white text-gray-700 border border-gray-200"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setResetConfirm(false);
                  onResetAllData();
                }}
                className="px-3 py-1 rounded-lg text-xs bg-red-600 text-white font-bold"
              >
                Hapus
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setResetConfirm(true)}
            className="w-full py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-bold hover:bg-red-100 transition-colors flex items-center justify-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Kosongkan &amp; Reset Data</span>
          </button>
        )}
      </div>

      {/* About Box */}
      <div className="text-center py-4 space-y-1 text-xs text-gray-400">
        <p className="font-bold text-gray-600">Umrah Companion v1.0.0</p>
        <p className="text-[11px]">
          Digital Manasik Guide &bull; Offline Capable PWA
        </p>
        <p className="text-[10px] text-gray-400">
          Dirancang khusus untuk kenyamanan jamaah umrah Indonesia di Tanah Suci
        </p>
      </div>
    </div>
  );
};
