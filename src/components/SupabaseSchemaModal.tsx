import React, { useState } from "react";
import { X, Copy, Check, Database, Sparkles } from "lucide-react";
import { SUPABASE_SQL_SCHEMA } from "../lib/storage";
import { triggerHaptic } from "../lib/audioSim";

interface SupabaseSchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseSchemaModal: React.FC<SupabaseSchemaModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopied(true);
    triggerHaptic("light");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="w-full max-w-lg max-h-[85vh] rounded-3xl bg-white p-5 shadow-2xl border border-emerald-900/10 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#004435] flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#004435]">
                Skema Database Supabase
              </h3>
              <p className="text-[11px] text-gray-500">
                Tabel SQL &amp; Kebijakan Keamanan (RLS) siap eksekusi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <div className="p-3 my-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-[#004435] shrink-0 mt-0.5" />
          <p>
            Salin skema SQL di bawah ini ke <strong>SQL Editor</strong> pada dashboard proyek Supabase Anda untuk mengaktifkan tabel <code>prayer_notes</code>, <code>counter_history</code>, dan <code>journey_progress</code> lengkap dengan Row Level Security (RLS).
          </p>
        </div>

        {/* SQL Code Box */}
        <div className="flex-1 overflow-y-auto rounded-2xl bg-gray-900 text-emerald-400 p-3 font-mono text-[11px] leading-relaxed border border-gray-800">
          <pre>{SUPABASE_SQL_SCHEMA}</pre>
        </div>

        {/* Footer */}
        <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] text-gray-500">
            Kompatibel dengan PostgreSQL 15+
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-[#004435] text-white text-xs font-bold hover:bg-[#0b5d4b] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Tersalin!" : "Salin Skema SQL"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
