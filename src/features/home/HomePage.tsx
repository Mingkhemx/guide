import React, { useState } from "react";
import {
  Sun,
  Compass,
  ArrowRight,
  Clock,
  Shirt,
  RotateCw,
  HandHeart,
  BookOpen,
  CheckCircle2,
  Circle,
  Star,
  Plus,
  ChevronRight,
  Sparkles,
  MapPin,
  ExternalLink,
  Volume2
} from "lucide-react";
import { ActiveTab, AppCity, NoteItem } from "../../types";
import { getPrayerTimesForCity, SUNNAH_RECOMMENDATIONS } from "../../lib/prayerTimes";
import { QuickGuideModal } from "../../components/QuickGuideModal";
import { triggerHaptic, playSpiritualChime } from "../../lib/audioSim";

interface HomePageProps {
  currentCity: AppCity;
  notes: NoteItem[];
  onSaveNotes: (notes: NoteItem[]) => void;
  onNavigate: (tab: ActiveTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentCity,
  notes,
  onSaveNotes,
  onNavigate
}) => {
  const [modalType, setModalType] = useState<"ihram" | "steps" | "mustajab" | null>(null);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newNoteCategory, setNewNoteCategory] = useState("Hajat Pribadi");

  const { prayers, nextPrayer } = getPrayerTimesForCity(currentCity);
  const sunnahList = SUNNAH_RECOMMENDATIONS[currentCity] || SUNNAH_RECOMMENDATIONS.Madinah;

  // Toggle favorite for a note
  const handleToggleFav = (noteId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHaptic("light");
    const updated = notes.map((n) =>
      n.id === noteId ? { ...n, favorite: !n.favorite } : n
    );
    onSaveNotes(updated);
  };

  // Toggle completed for a note
  const handleToggleComplete = (noteId: string) => {
    triggerHaptic("medium");
    playSpiritualChime("click");
    const updated = notes.map((n) =>
      n.id === noteId ? { ...n, completed: !n.completed } : n
    );
    onSaveNotes(updated);
  };

  // Create note from quick home modal
  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim()) return;

    const newNote: NoteItem = {
      id: "note-" + Date.now(),
      title: newNoteTitle.trim(),
      content: newNoteContent.trim() || "Doa hajat dan munajat kepada Allah SWT.",
      category: newNoteCategory,
      favorite: false,
      completed: false,
      createdAt: new Date().toISOString()
    };

    onSaveNotes([newNote, ...notes]);
    setNewNoteTitle("");
    setNewNoteContent("");
    setShowAddNoteModal(false);
    triggerHaptic("success");
    playSpiritualChime("round_advance");
  };

  return (
    <div className="w-full flex flex-col gap-5 px-4 max-w-[480px] mx-auto pb-28 pt-2">
      {/* 1. Welcome & Location Hero Card (Emerald Glassmorphic Luxury) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#004435] via-[#0b5d4b] to-[#043328] text-white p-5 shadow-[0_16px_40px_rgba(11,93,75,0.22)] border border-emerald-400/20">
        {/* Ambient glowing backdrop effect */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#8cd3bc]/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 bottom-0 w-36 h-36 rounded-full bg-[#D4AF37]/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-3">
          {/* Status Badge Pill */}
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/12 backdrop-blur-md border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#FFE088] animate-pulse" />
              <span className="text-[11px] font-bold text-[#FFE088] tracking-wider uppercase">
                Hari Ke-3 • {currentCity === "Madinah" ? "Madinah Al-Munawwarah" : currentCity === "Makkah" ? "Makkah Al-Mukarramah" : "Persiapan Jakarta"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-white/80 text-xs">
              <Sun className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentCity === "Jakarta" ? "30°C Lembab" : "28°C Cerah"}</span>
            </div>
          </div>

          {/* Greeting & Subtitle */}
          <div className="flex flex-col pt-1">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>Assalamu’alaikum, Fajar</span>
              <span className="text-lg">👋</span>
            </h2>
            <p className="text-xs text-[#a9f1d9] mt-0.5 leading-relaxed font-medium">
              Semoga ibadah Umroh Anda mabrur, diterima, dan penuh keberkahan di tanah suci.
            </p>
          </div>

          {/* Next Activity Highlight Box */}
          <div className="mt-1 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/25 text-[#FFE088] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFE088]">
                  Agenda Utama • 14:00
                </span>
                <h3 className="text-sm font-bold text-white truncate">
                  Ziarah Raudhah Asy-Syarifah
                </h3>
              </div>
            </div>
            <button
              onClick={() => setModalType("steps")}
              className="shrink-0 px-2.5 py-1 rounded-full bg-[#D4AF37] text-[#241a00] font-bold text-[11px] hover:bg-[#FFE088] transition-colors shadow-sm"
            >
              Siapkan Nusuk
            </button>
          </div>
        </div>
      </section>

      {/* 2. Umrah Progress Tracker Card */}
      <section className="bg-white/92 backdrop-blur-xl rounded-3xl p-5 shadow-[0_8px_28px_rgba(11,93,75,0.06)] border border-emerald-900/5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-[#004435]">
              <RotateCw className="w-3.5 h-3.5" />
            </div>
            <h3 className="font-bold text-base text-[#004435]">Progress Umroh</h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#9af4d7] text-[#005140] font-bold text-[11px]">
            65% Terlaksana
          </span>
        </div>

        {/* Progress Ring & Main Stat Visual */}
        <div className="flex items-center gap-4 bg-[#ebf6f0]/70 p-3.5 rounded-2xl border border-emerald-100/60">
          <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#dae5df]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                className="text-[#006b56]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="65, 100"
                strokeLinecap="round"
                strokeWidth="3.5"
              />
            </svg>
            <span className="absolute font-bold text-sm text-[#004435]">3/9</span>
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#141e1a] truncate">
              Fase 1: Madinah Al-Munawwarah
            </span>
            <p className="text-[12px] text-gray-600 line-clamp-2 mt-0.5 leading-relaxed">
              Besok bersiap Miqat di Bir Ali dan keberangkatan kereta cepat Haramain ke Makkah.
            </p>
          </div>
        </div>

        {/* Timeline Stepper Summary */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100/40">
            <span className="text-[10px] font-bold text-[#006b56] uppercase">Telah Selesai</span>
            <div className="flex items-center gap-1.5 text-gray-800 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#006b56] shrink-0" />
              <span className="truncate">Persiapan &amp; Berangkat</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-800 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#006b56] shrink-0" />
              <span className="truncate">Masjid Nabawi &amp; Baqi</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-800 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#006b56] shrink-0" />
              <span className="truncate">Ziarah Quba &amp; Uhud</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-amber-50/50 border border-amber-100/50">
            <span className="text-[10px] font-bold text-[#735c00] uppercase">Selanjutnya</span>
            <div className="flex items-center gap-1.5 text-gray-800 text-[11px]">
              <Circle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">Miqat Bir Ali (Besok)</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-800 text-[11px]">
              <Circle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">Tawaf &amp; Sa'i Makkah</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-800 text-[11px]">
              <Circle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">Tahallul &amp; Umroh Selesai</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate("journey")}
          className="w-full py-2 flex items-center justify-center gap-1.5 text-[#006b56] hover:text-[#004435] transition-colors font-bold text-xs"
        >
          <span>Lihat Detail Timeline Perjalanan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* 3. Jadwal Shalat (Prayer Reminders) */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-[#004435]">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <h3 className="font-bold text-base text-[#004435]">Jadwal Shalat</h3>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-gray-600 font-semibold text-[11px] shadow-xs border border-gray-100">
            <MapPin className="w-3 h-3 text-[#006b56]" />
            <span>Waktu {currentCity}</span>
          </div>
        </div>

        {/* Horizontal Prayer Cards */}
        <div className="flex gap-2 overflow-x-auto pb-1 pt-0.5 no-scrollbar -mx-4 px-4">
          {prayers.map((prayer) => {
            const isHighlighted = prayer.isNext;

            if (isHighlighted) {
              return (
                <div
                  key={prayer.name}
                  className="min-w-[102px] flex-1 flex flex-col items-center justify-center p-3 rounded-2xl bg-[#004435] text-white shadow-[0_8px_20px_rgba(11,93,75,0.25)] text-center relative overflow-hidden border border-emerald-400/30"
                >
                  <div className="absolute top-0 right-0 left-0 bg-[#D4AF37] text-[#241a00] font-bold text-[9px] py-0.5 leading-tight tracking-wider uppercase">
                    {prayer.statusLabel}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8dd4bd] mt-2.5">
                    {prayer.name}
                  </span>
                  <span className="text-base font-bold text-white mt-0.5">
                    {prayer.time}
                  </span>
                  <span className="text-[10px] text-[#FFE088] mt-1 font-arabic">
                    {prayer.nameArabic}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={prayer.name}
                className="min-w-[80px] flex-1 flex flex-col items-center justify-center p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-100 text-center"
              >
                <span className="text-[11px] font-medium text-gray-500">
                  {prayer.name}
                </span>
                <span className="text-sm font-bold text-[#141e1a] mt-0.5">
                  {prayer.time}
                </span>
                <span
                  className={`text-[10px] mt-1 ${
                    prayer.isPassed ? "text-gray-400 font-medium" : "text-emerald-700 font-semibold"
                  }`}
                >
                  {prayer.statusLabel}
                </span>
              </div>
            );
          })}
        </div>

        {/* Sunnah Recommendation Strip */}
        <div
          onClick={() => setModalType("mustajab")}
          className="flex items-center justify-between p-3 rounded-2xl bg-emerald-100/60 border border-emerald-200/50 text-[#005140] cursor-pointer hover:bg-emerald-100/90 transition-colors"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles className="w-4 h-4 text-[#006b56] shrink-0" />
            <span className="text-xs font-medium truncate">
              {sunnahList[0]}
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#006b56] shrink-0" />
        </div>
      </section>

      {/* 4. Quick Guide & Action Cards (2 Columns Bento Grid) */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base text-[#004435]">
            Panduan &amp; Perangkat Ibadah
          </h3>
          <span className="text-[11px] text-gray-500 font-medium">Akses Cepat</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Card 1: Ihram Guide */}
          <button
            onClick={() => setModalType("ihram")}
            className="group relative flex flex-col justify-between p-4 rounded-3xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-emerald-900/5 hover:border-emerald-500/30 text-left transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#004435] flex items-center justify-center">
                <Shirt className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#004435] transition-colors" />
            </div>
            <div className="mt-3.5 flex flex-col">
              <h4 className="font-bold text-sm text-[#004435]">Panduan Ihram</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                Tata cara pakai, larangan, &amp; sunnah
              </p>
            </div>
          </button>

          {/* Card 2: Tawaf & Sa'i Counter */}
          <button
            onClick={() => onNavigate("counter")}
            className="group relative flex flex-col justify-between p-4 rounded-3xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-emerald-900/5 hover:border-emerald-500/30 text-left transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[#FFE088] text-[#735c00] flex items-center justify-center">
                <RotateCw className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#004435] transition-colors" />
            </div>
            <div className="mt-3.5 flex flex-col">
              <h4 className="font-bold text-sm text-[#004435]">Tawaf &amp; Sa'i</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                Penghitung putaran haptik &amp; doa
              </p>
            </div>
          </button>

          {/* Card 3: Niat & Talbiyah */}
          <button
            onClick={() => onNavigate("niat")}
            className="group relative flex flex-col justify-between p-4 rounded-3xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-emerald-900/5 hover:border-emerald-500/30 text-left transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100/70 text-[#004435] flex items-center justify-center">
                <HandHeart className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#004435] transition-colors" />
            </div>
            <div className="mt-3.5 flex flex-col">
              <h4 className="font-bold text-sm text-[#004435]">Niat &amp; Talbiyah</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                Audio &amp; teks lafadz Labbaikallahumma
              </p>
            </div>
          </button>

          {/* Card 4: Kumpulan Doa */}
          <button
            onClick={() => onNavigate("doa")}
            className="group relative flex flex-col justify-between p-4 rounded-3xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-emerald-900/5 hover:border-emerald-500/30 text-left transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[#ebf6f0] text-[#004435] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#004435] transition-colors" />
            </div>
            <div className="mt-3.5 flex flex-col">
              <h4 className="font-bold text-sm text-[#004435]">Koleksi Doa</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                Raudhah, Safar, &amp; Multazam
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* 5. Catatan Doa Pribadi (Prayer Notes Preview) */}
      <section className="bg-white/92 backdrop-blur-xl rounded-3xl p-5 shadow-[0_8px_32px_rgba(11,93,75,0.06)] border border-emerald-900/5 flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#FFE088] flex items-center justify-center text-[#735c00]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h3 className="font-bold text-base text-[#004435]">Catatan Doa Pribadi</h3>
          </div>
          <button
            onClick={() => onNavigate("notes")}
            className="text-[11px] font-bold text-[#006b56] hover:underline"
          >
            {notes.length} Tersimpan &rarr;
          </button>
        </div>

        {/* Notes list items */}
        <div className="flex flex-col gap-2.5">
          {notes.slice(0, 3).map((note) => (
            <div
              key={note.id}
              onClick={() => handleToggleComplete(note.id)}
              className="p-3.5 rounded-2xl bg-[#ebf6f0]/50 hover:bg-[#ebf6f0]/80 transition-colors border border-emerald-100/40 flex items-start justify-between gap-3 cursor-pointer"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleComplete(note.id);
                  }}
                  className="mt-0.5 shrink-0"
                >
                  {note.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-[#006b56]" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 hover:text-[#006b56]" />
                  )}
                </button>
                <div className="flex flex-col min-w-0">
                  <span
                    className={`text-xs font-bold truncate ${
                      note.completed ? "line-through text-gray-400" : "text-[#141e1a]"
                    }`}
                  >
                    {note.title}
                  </span>
                  <span className="text-[10px] text-gray-500 truncate mt-0.5">
                    {note.content}
                  </span>
                  <span className="text-[10px] text-[#cca72f] font-semibold flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f]" />
                    {note.category}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => handleToggleFav(note.id, e)}
                className="p-1 text-gray-300 hover:text-amber-500 transition-colors shrink-0"
                title={note.favorite ? "Favorit" : "Tandai Favorit"}
              >
                <Star
                  className={`w-4 h-4 ${
                    note.favorite ? "fill-amber-400 text-amber-400" : "text-gray-300"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Add Note Action Button */}
        <button
          onClick={() => setShowAddNoteModal(true)}
          className="w-full py-3 rounded-2xl bg-[#004435] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(11,93,75,0.18)] hover:bg-[#0b5d4b] active:scale-[0.99] transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Doa Baru</span>
        </button>
      </section>

      {/* Add Note Modal */}
      {showAddNoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl border border-emerald-900/10 text-left">
            <h4 className="font-bold text-base text-[#004435] mb-3">
              Tulis Catatan Doa Pribadi
            </h4>
            <form onSubmit={handleCreateNote} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Judul Doa / Hajat
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Doa untuk Kesembuhan Ibu"
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#004435]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Kategori Tempat / Tujuan
                </label>
                <select
                  value={newNoteCategory}
                  onChange={(e) => setNewNoteCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#004435]"
                >
                  <option value="Khusus Multazam">Khusus Multazam</option>
                  <option value="Raudhah Nabawi">Raudhah Nabawi</option>
                  <option value="Orang Tua & Keluarga">Orang Tua &amp; Keluarga</option>
                  <option value="Titipan Rekan">Titipan Rekan</option>
                  <option value="Hajat Pribadi">Hajat Pribadi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Isi Rincian Doa
                </label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan nama-nama yang dititipkan atau lafadz munajat Anda..."
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#004435]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddNoteModal(false)}
                  className="px-3.5 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#004435] hover:bg-[#0b5d4b] rounded-xl shadow-sm"
                >
                  Simpan Doa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quick Guide Modal (Ihram, Steps, Mustajab) */}
      <QuickGuideModal
        type={modalType}
        onClose={() => setModalType(null)}
        onNavigateToTab={onNavigate}
      />
    </div>
  );
};
