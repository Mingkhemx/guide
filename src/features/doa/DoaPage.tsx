import React, { useState, useMemo } from "react";
import {
  Search,
  Star,
  Copy,
  Share2,
  Type,
  Volume2,
  VolumeX,
  Sparkles,
  Check,
  Filter
} from "lucide-react";
import { PrayerCategory, PrayerItem } from "../../types";
import { PRAYERS_DATA } from "../../data/doaData";
import { triggerHaptic, playSpiritualChime } from "../../lib/audioSim";

interface DoaPageProps {
  favorites: string[];
  onToggleFavorite: (prayerId: string) => void;
}

export const DoaPage: React.FC<DoaPageProps> = ({ favorites, onToggleFavorite }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [fontSize, setFontSize] = useState<"md" | "lg" | "xl">("lg");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const categories = [
    "Semua",
    "Favorit",
    "Travel",
    "Umrah",
    "Tawaf",
    "Sai",
    "Tahallul",
    "Madinah",
    "Return"
  ];

  // Filtered prayers
  const filteredPrayers = useMemo(() => {
    return PRAYERS_DATA.filter((prayer) => {
      const isFav = favorites.includes(prayer.id);

      // Category filter
      if (selectedCategory === "Favorit") {
        if (!isFav) return false;
      } else if (selectedCategory !== "Semua") {
        if (prayer.category !== selectedCategory) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = prayer.title.toLowerCase().includes(query);
        const matchLatin = prayer.latin.toLowerCase().includes(query);
        const matchTrans = prayer.translation.toLowerCase().includes(query);
        const matchOccasion = prayer.occasion?.toLowerCase().includes(query) || false;
        return matchTitle || matchLatin || matchTrans || matchOccasion;
      }

      return true;
    });
  }, [favorites, selectedCategory, searchQuery]);

  // Copy handler
  const handleCopy = (prayer: PrayerItem) => {
    const text = `${prayer.title}\n\n${prayer.arabic}\n\n"${prayer.latin}"\n\nArtinya: ${prayer.translation}\n(${prayer.reference})`;
    navigator.clipboard.writeText(text);
    setCopiedId(prayer.id);
    triggerHaptic("light");
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Share handler
  const handleShare = async (prayer: PrayerItem) => {
    triggerHaptic("light");
    const text = `${prayer.title}\n\n${prayer.arabic}\n\n"${prayer.latin}"\n\nArtinya: ${prayer.translation}\n\nDibagikan dari Umrah Companion PWA`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: prayer.title,
          text: text
        });
      } catch {
        handleCopy(prayer);
      }
    } else {
      handleCopy(prayer);
    }
  };

  // Audio simulation handler
  const handleTogglePlay = (prayerId: string) => {
    triggerHaptic("light");
    if (playingId === prayerId) {
      setPlayingId(null);
    } else {
      setPlayingId(prayerId);
      playSpiritualChime("round_advance");
      // Auto-stop after 8 seconds of simulated reading
      setTimeout(() => {
        setPlayingId((prev) => (prev === prayerId ? null : prev));
      }, 8000);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 px-4 max-w-[480px] mx-auto pb-28 pt-2">
      {/* Header & Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#004435] tracking-tight">
            Koleksi Doa Manasik
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Doa-doa shahih &amp; pilihan teruji untuk setiap rukun ibadah
          </p>
        </div>

        {/* Font Size Selector button */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-gray-200 shadow-xs">
          <button
            onClick={() => setFontSize("md")}
            className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${
              fontSize === "md" ? "bg-[#004435] text-white" : "text-gray-500 hover:text-gray-900"
            }`}
            title="Ukuran Tulisan Sedang"
          >
            A
          </button>
          <button
            onClick={() => setFontSize("lg")}
            className={`px-2 py-1 text-sm font-bold rounded-lg transition-colors ${
              fontSize === "lg" ? "bg-[#004435] text-white" : "text-gray-500 hover:text-gray-900"
            }`}
            title="Ukuran Tulisan Besar"
          >
            A+
          </button>
          <button
            onClick={() => setFontSize("xl")}
            className={`px-2 py-1 text-base font-bold rounded-lg transition-colors ${
              fontSize === "xl" ? "bg-[#004435] text-white" : "text-gray-500 hover:text-gray-900"
            }`}
            title="Ukuran Tulisan Ekstra Besar"
          >
            A++
          </button>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Cari doa, lafadz latin, atau arti kata..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl bg-white border border-emerald-900/10 shadow-xs focus:outline-none focus:border-[#004435]"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
          >
            Bersihkan
          </button>
        )}
      </div>

      {/* Categories Filter Horizontal Scroll */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                triggerHaptic("light");
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? "bg-[#004435] text-white shadow-xs"
                  : "bg-white/90 text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200/70"
              }`}
            >
              {cat === "Favorit" && "⭐ "}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Prayers List */}
      <div className="flex flex-col gap-3.5">
        {filteredPrayers.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-gray-200">
            <p className="text-sm font-semibold text-gray-600 mb-1">
              Doa tidak ditemukan
            </p>
            <p className="text-xs text-gray-400">
              Coba gunakan kata kunci lain seperti 'zamzam', 'safar', atau 'kabah'.
            </p>
          </div>
        ) : (
          filteredPrayers.map((prayer) => {
            const isFav = favorites.includes(prayer.id);
            const isPlaying = playingId === prayer.id;

            return (
              <div
                key={prayer.id}
                className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-emerald-900/5 flex flex-col gap-3 transition-all hover:border-emerald-300/60"
              >
                {/* Card Header: Category & Actions */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#004435] text-[10px] font-bold uppercase">
                        {prayer.category}
                      </span>
                      {prayer.occasion && (
                        <span className="text-[11px] text-gray-500 font-medium">
                          • {prayer.occasion}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-[#004435]">
                      {prayer.title}
                    </h3>
                  </div>

                  {/* Favorite Star Button */}
                  <button
                    onClick={() => {
                      triggerHaptic("medium");
                      onToggleFavorite(prayer.id);
                    }}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-300 hover:text-amber-500 transition-colors"
                    title={isFav ? "Hapus dari Favorit" : "Simpan ke Favorit"}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        isFav ? "fill-amber-400 text-amber-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                </div>

                {/* Arabic Script Box */}
                <div className="p-4 rounded-2xl bg-[#f0fcf5]/70 border border-emerald-100 text-right">
                  <p
                    className={`font-arabic leading-loose text-gray-900 dir-rtl ${
                      fontSize === "md"
                        ? "text-lg"
                        : fontSize === "lg"
                        ? "text-2xl"
                        : "text-3xl"
                    }`}
                  >
                    {prayer.arabic}
                  </p>
                </div>

                {/* Latin Transliteration */}
                <p className="italic text-xs text-emerald-900 font-medium leading-relaxed">
                  "{prayer.latin}"
                </p>

                {/* Indonesian Translation */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-700">Artinya: </span>
                  {prayer.translation}
                </p>

                {/* Footer Bar: Reference, Audio simulator, Copy, Share */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                  <span className="text-[11px] text-gray-400 truncate max-w-[170px]">
                    {prayer.reference}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {/* Audio Recitation Simulator */}
                    <button
                      onClick={() => handleTogglePlay(prayer.id)}
                      className={`p-1.5 rounded-lg border transition-all flex items-center gap-1 text-[11px] font-semibold ${
                        isPlaying
                          ? "bg-emerald-600 text-white border-emerald-600 animate-pulse"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-emerald-50 hover:text-[#004435]"
                      }`}
                      title={isPlaying ? "Hentikan Suara" : "Putar Bacaan"}
                    >
                      {isPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span className="hidden xs:inline">{isPlaying ? "Mendengarkan" : "Audio"}</span>
                    </button>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(prayer)}
                      className="p-1.5 rounded-lg bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-[#004435] border border-gray-200 transition-colors"
                      title="Salin Teks Doa"
                    >
                      {copiedId === prayer.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Share Button */}
                    <button
                      onClick={() => handleShare(prayer)}
                      className="p-1.5 rounded-lg bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-[#004435] border border-gray-200 transition-colors"
                      title="Bagikan Doa"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
