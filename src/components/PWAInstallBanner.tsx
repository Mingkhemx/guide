import React from "react";
import { Download, X, Share, PlusSquare } from "lucide-react";

interface PWAInstallBannerProps {
  isInstallable: boolean;
  isIOS: boolean;
  showIOSGuide: boolean;
  onInstall: () => void;
  onCloseIOSGuide: () => void;
  onShowIOSGuide: () => void;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({
  isInstallable,
  isIOS,
  showIOSGuide,
  onInstall,
  onCloseIOSGuide,
  onShowIOSGuide
}) => {
  return (
    <>
      {/* Non-intrusive floating install prompt for installable browsers */}
      {isInstallable && (
        <div className="fixed bottom-24 left-4 right-4 z-40 max-w-[440px] mx-auto bg-white/95 backdrop-blur-xl border border-emerald-800/15 p-3.5 rounded-2xl shadow-[0_12px_32px_rgba(11,93,75,0.18)] flex items-center justify-between gap-3 animate-in slide-in-from-bottom-6">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#004435] text-[#D4AF37] flex items-center justify-center shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-[#004435] truncate">
                Install Umrah Companion
              </span>
              <span className="text-[11px] text-gray-500 line-clamp-1">
                Akses cepat dari Home Screen tanpa browser
              </span>
            </div>
          </div>
          <button
            onClick={onInstall}
            className="px-3.5 py-1.5 rounded-full bg-[#004435] text-white text-xs font-semibold hover:bg-[#0b5d4b] transition-colors shrink-0 shadow-sm"
          >
            Pasang
          </button>
        </div>
      )}

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-emerald-900/10 text-[#141e1a]">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="font-bold text-base text-[#004435] flex items-center gap-2">
                <span>Pasang di iPhone / iPad</span>
              </h3>
              <button
                onClick={onCloseIOSGuide}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#004435] font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  1
                </div>
                <p>
                  Ketuk tombol <span className="font-semibold text-gray-800 inline-flex items-center gap-1"><Share className="w-3.5 h-3.5" /> Bagikan (Share)</span> pada bilah bawah browser Safari.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#004435] font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  2
                </div>
                <p>
                  Gulir ke bawah lalu pilih menu <span className="font-semibold text-gray-800 inline-flex items-center gap-1"><PlusSquare className="w-3.5 h-3.5" /> Tambah ke Layar Utama (Add to Home Screen)</span>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#004435] font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  3
                </div>
                <p>
                  Ketuk <strong className="text-[#004435]">Tambah (Add)</strong> di pojok kanan atas. Aplikasi Umrah Companion siap digunakan kapan pun secara offline!
                </p>
              </div>
            </div>

            <button
              onClick={onCloseIOSGuide}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#004435] text-white text-sm font-semibold hover:bg-[#0b5d4b] transition-colors"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </>
  );
};
