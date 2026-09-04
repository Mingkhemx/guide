import React, { useState, useMemo } from "react";
import {
  Plus,
  Search,
  Star,
  Trash2,
  Edit2,
  CheckCircle2,
  Circle,
  Share2,
  Sparkles,
  Database,
  X,
  Check
} from "lucide-react";
import { NoteItem } from "../../types";
import { triggerHaptic, playSpiritualChime } from "../../lib/audioSim";

interface NotesPageProps {
  notes: NoteItem[];
  onSaveNotes: (notes: NoteItem[]) => void;
  onOpenSyncModal: () => void;
}

export const NotesPage: React.FC<NotesPageProps> = ({
  notes,
  onSaveNotes,
  onOpenSyncModal
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("Semua");
  const [editingNote, setEditingNote] = useState<NoteItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Hajat Pribadi");

  const categories = [
    "Semua",
    "Favorit",
    "Khusus Multazam",
    "Raudhah Nabawi",
    "Orang Tua & Keluarga",
    "Titipan Rekan",
    "Hajat Pribadi"
  ];

  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      if (selectedCat === "Favorit" && !n.favorite) return false;
      if (selectedCat !== "Semua" && selectedCat !== "Favorit" && n.category !== selectedCat) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q);
      }
      return true;
    });
  }, [notes, selectedCat, searchQuery]);

  // Open modal for new
  const handleOpenNew = () => {
    setEditingNote(null);
    setTitle("");
    setContent("");
    setCategory("Hajat Pribadi");
    setShowModal(true);
  };

  // Open modal for edit
  const handleOpenEdit = (n: NoteItem) => {
    setEditingNote(n);
    setTitle(n.title);
    setContent(n.content);
    setCategory(n.category);
    setShowModal(true);
  };

  // Save or Update note
  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    triggerHaptic("success");
    playSpiritualChime("round_advance");

    if (editingNote) {
      const updated = notes.map((item) =>
        item.id === editingNote.id
          ? {
              ...item,
              title: title.trim(),
              content: content.trim(),
              category
            }
          : item
      );
      onSaveNotes(updated);
    } else {
      const newNote: NoteItem = {
        id: "note-" + Date.now(),
        title: title.trim(),
        content: content.trim() || "Doa hajat dan munajat kepada Allah SWT.",
        category,
        favorite: false,
        completed: false,
        createdAt: new Date().toISOString()
      };
      onSaveNotes([newNote, ...notes]);
    }

    setShowModal(false);
  };

  // Delete note
  const handleDeleteNote = (id: string) => {
    triggerHaptic("heavy");
    if (confirm("Hapus catatan doa ini?")) {
      const updated = notes.filter((n) => n.id !== id);
      onSaveNotes(updated);
    }
  };

  // Toggle favorite
  const handleToggleFav = (id: string) => {
    triggerHaptic("light");
    const updated = notes.map((n) =>
      n.id === id ? { ...n, favorite: !n.favorite } : n
    );
    onSaveNotes(updated);
  };

  // Toggle complete
  const handleToggleComplete = (id: string) => {
    triggerHaptic("medium");
    playSpiritualChime("click");
    const updated = notes.map((n) =>
      n.id === id ? { ...n, completed: !n.completed } : n
    );
    onSaveNotes(updated);
  };

  // Share note
  const handleShareNote = (n: NoteItem) => {
    triggerHaptic("light");
    const text = `Catatan Doa Tanah Suci:\n*${n.title}* (${n.category})\n\n${n.content}\n\nDisimpan di Umrah Companion PWA`;
    if (navigator.share) {
      navigator.share({ title: n.title, text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert("Teks doa disalin ke clipboard.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 px-4 max-w-[480px] mx-auto pb-28 pt-2">
      {/* Title Bar & Supabase Cloud Sync trigger */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#004435] tracking-tight">
            Catatan Doa Pribadi
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Daftar hajat, doa keluarga, &amp; titipan doa saat di Multazam
          </p>
        </div>

        <button
          onClick={onOpenSyncModal}
          className="p-2 rounded-xl bg-emerald-100/70 text-[#004435] hover:bg-emerald-200/70 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          title="Sinkronisasi Cloud Supabase"
        >
          <Database className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Cloud Sync</span>
        </button>
      </div>

      {/* Action Button: Tambah Catatan */}
      <button
        onClick={handleOpenNew}
        className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#004435] to-[#0b5d4b] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(11,93,75,0.18)] hover:bg-[#00382b] active:scale-98 transition-all"
      >
        <Plus className="w-4 h-4" />
        <span>Tulis Catatan Doa Baru</span>
      </button>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Cari hajat, nama titipan, atau isi doa..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl bg-white border border-emerald-900/10 shadow-xs focus:outline-none focus:border-[#004435]"
        />
      </div>

      {/* Category Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4">
        {categories.map((cat) => {
          const isSelected = selectedCat === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                triggerHaptic("light");
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? "bg-[#004435] text-white shadow-xs"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200/80"
              }`}
            >
              {cat === "Favorit" && "⭐ "}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Notes List */}
      <div className="space-y-3">
        {filteredNotes.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-gray-200 space-y-2">
            <p className="text-sm font-semibold text-gray-600">
              Belum ada catatan pada kategori ini
            </p>
            <p className="text-xs text-gray-400">
              Ketuk "Tulis Catatan Doa Baru" untuk menuliskan hajat atau doa titipan kerabat.
            </p>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-emerald-900/5 space-y-3 transition-all hover:border-emerald-300/60"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5 min-w-0">
                  <button
                    onClick={() => handleToggleComplete(note.id)}
                    className="mt-0.5 shrink-0"
                    title={note.completed ? "Tandai belum dibaca" : "Tandai sudah dipanjatkan"}
                  >
                    {note.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 hover:text-emerald-600" />
                    )}
                  </button>

                  <div className="min-w-0">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#004435] text-[10px] font-bold uppercase inline-block mb-1">
                      {note.category}
                    </span>
                    <h3
                      className={`text-sm font-bold truncate ${
                        note.completed ? "line-through text-gray-400" : "text-[#141e1a]"
                      }`}
                    >
                      {note.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => handleToggleFav(note.id)}
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

              {/* Note Content */}
              <p
                className={`text-xs leading-relaxed whitespace-pre-line ${
                  note.completed ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {note.content}
              </p>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] text-gray-400">
                <span>
                  {new Date(note.createdAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short"
                  })}
                  {note.completed && " • Sudah Dipanjatkan"}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleShareNote(note)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Bagikan Catatan"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleOpenEdit(note)}
                    className="p-1.5 rounded-lg hover:bg-emerald-50 text-gray-500 hover:text-[#004435] transition-colors"
                    title="Edit Catatan"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                    title="Hapus Catatan"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create / Edit Note Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl border border-emerald-900/10 text-left">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-[#004435]">
                {editingNote ? "Edit Catatan Doa" : "Tulis Doa Baru"}
              </h4>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveNote} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Judul Doa / Nama Penitip
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Doa untuk Ayah & Ibu di Multazam"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#004435]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Kategori / Tempat Khusus
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  Isi Permohonan Doa
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan butir permohonan, nama-nama yang didoakan, atau lafadz munajat khusus..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#004435]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3.5 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#004435] hover:bg-[#0b5d4b] rounded-xl shadow-sm"
                >
                  {editingNote ? "Perbarui Doa" : "Simpan Doa"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
