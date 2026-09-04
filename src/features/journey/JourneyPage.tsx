import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Shirt,
  Sparkles,
  CheckCircle2,
  Circle,
  BookOpen,
  Check
} from "lucide-react";
import { INITIAL_JOURNEY_DAYS } from "../../data/journeyData";
import { JourneyDay } from "../../types";
import { triggerHaptic, playSpiritualChime } from "../../lib/audioSim";

interface JourneyPageProps {
  completedActivities: Record<string, boolean>;
  onToggleActivity: (activityId: string) => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({
  completedActivities,
  onToggleActivity
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(3); // Default Day 3 matching current journey state

  const activeDay = INITIAL_JOURNEY_DAYS.find((d) => d.day === selectedDayNum) || INITIAL_JOURNEY_DAYS[0];

  // Calculate overall journey checklist progress
  const allChecklistItems = INITIAL_JOURNEY_DAYS.flatMap((d) => d.checklist);
  const completedCount = allChecklistItems.filter((item) => completedActivities[item.id]).length;
  const progressPercent = Math.round((completedCount / allChecklistItems.length) * 100);

  const handleToggle = (id: string) => {
    triggerHaptic("medium");
    playSpiritualChime("click");
    onToggleActivity(id);
  };

  return (
    <div className="w-full flex flex-col gap-4 px-4 max-w-[480px] mx-auto pb-28 pt-2">
      {/* Page Title & Overall Journey Progress */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#004435] tracking-tight">
            Itinerary 9 Hari Umrah
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Panduan harian terstruktur dari berangkat hingga Tawaf Wada'
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-100 text-[#004435] text-xs font-bold">
          {progressPercent}% Tuntas
        </div>
      </div>

      {/* Horizontal Day Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4">
        {INITIAL_JOURNEY_DAYS.map((day) => {
          const isSelected = day.day === selectedDayNum;
          const isToday = day.day === 3;
          const dayCompleted = day.checklist.every((c) => completedActivities[c.id]);

          return (
            <button
              key={day.day}
              onClick={() => {
                setSelectedDayNum(day.day);
                triggerHaptic("light");
              }}
              className={`min-w-[70px] py-2.5 px-2 rounded-2xl flex flex-col items-center justify-center transition-all ${
                isSelected
                  ? "bg-[#004435] text-white shadow-md scale-102"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80"
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                {isToday ? "Hari Ini" : `Hari`}
              </span>
              <span className="text-base font-extrabold mt-0.5">
                {day.day}
              </span>
              <span className="text-[10px] truncate max-w-[55px] opacity-80">
                {day.day <= 3 ? "Madinah" : day.day <= 8 ? "Makkah" : "Pulang"}
              </span>
              {dayCompleted && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE088] mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Day Detail Card */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgba(11,93,75,0.06)] border border-emerald-900/5 space-y-4">
        {/* Day Header Banner */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#735c00] text-[10px] font-bold uppercase">
                Hari Ke-{activeDay.day}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {activeDay.phase}
              </span>
            </div>
            <h3 className="text-base font-bold text-[#004435]">
              {activeDay.title}
            </h3>
          </div>
        </div>

        {/* Location & Dress Code */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-2 text-emerald-900">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-gray-500 block">Lokasi Utama:</span>
              <span className="font-semibold text-[11px] truncate block">{activeDay.location}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-2 text-emerald-900">
            <Shirt className="w-4 h-4 text-emerald-700 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-gray-500 block">Pakaian Disarankan:</span>
              <span className="font-semibold text-[11px] truncate block">
                {activeDay.day === 4 || activeDay.day === 5 ? "Kain Ihram Lengkap" : "Baju Muslim Rapi / Ihram Bebas"}
              </span>
            </div>
          </div>
        </div>

        {/* Activities Bullet Points */}
        <div className="space-y-2 text-xs">
          <span className="font-bold text-gray-800 block">
            Rangkaian Agenda Hari Ini:
          </span>
          <div className="space-y-1.5">
            {activeDay.activities.map((act, idx) => (
              <div key={idx} className="flex items-start gap-2 text-gray-700 text-[11px] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004435] shrink-0 mt-1.5" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Prayers Pill list */}
        {activeDay.prayers.length > 0 && (
          <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/50 space-y-1.5">
            <span className="font-bold text-[11px] text-amber-900 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              Doa-Doa Pilihan Terkait Hari Ini:
            </span>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {activeDay.prayers.map((prayerName, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-white/80 border border-amber-200 text-amber-950 font-medium text-[10px]"
                >
                  {prayerName}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Checklist */}
        <div className="space-y-2.5 pt-1 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs font-bold text-gray-700">
            <span>Checklist Kesiapan &amp; Ibadah</span>
            <span className="text-[11px] font-normal text-gray-500">
              Ketuk untuk mencentang
            </span>
          </div>

          <div className="space-y-2">
            {activeDay.checklist.map((item) => {
              const isChecked = !!completedActivities[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() => handleToggle(item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? "bg-emerald-50/50 border-emerald-200/60 text-gray-500"
                      : "bg-[#ebf6f0]/30 hover:bg-[#ebf6f0]/60 border-gray-200/70 text-gray-800"
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(item.id);
                    }}
                    className="mt-0.5 shrink-0"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 hover:text-emerald-600" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0 text-xs">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`font-bold ${isChecked ? "line-through text-gray-400" : "text-gray-900"}`}>
                        {item.text}
                      </span>
                      {item.time && (
                        <span className="text-[10px] font-semibold text-emerald-800 px-1.5 py-0.5 rounded bg-emerald-100/70 shrink-0">
                          {item.time}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
