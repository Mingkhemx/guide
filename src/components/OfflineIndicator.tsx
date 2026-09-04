import React from "react";
import { WifiOff } from "lucide-react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 px-4 py-2 bg-amber-600 text-white text-xs font-medium shadow-md flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top duration-300">
      <WifiOff className="w-3.5 h-3.5 shrink-0" />
      <span>
        Mode Offline Aktif — Seluruh panduan doa, counter, dan catatan tetap dapat diakses tanpa kuota data.
      </span>
    </div>
  );
};
