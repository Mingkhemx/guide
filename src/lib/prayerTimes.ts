import { AppCity } from "../types";

export type PrayerTimeItem = {
  name: string;
  nameArabic: string;
  time: string; // "HH:mm"
  isPassed: boolean;
  isNext: boolean;
  countdownMinutes?: number;
  statusLabel: string;
};

// Base daily schedule per city (approximate authentic Haramain times)
const BASE_TIMES: Record<AppCity, { Subuh: string; Syuruq: string; Dzuhur: string; Ashar: string; Maghrib: string; Isya: string }> = {
  Madinah: {
    Subuh: "05:12",
    Syuruq: "06:30",
    Dzuhur: "12:18",
    Ashar: "15:42",
    Maghrib: "18:24",
    Isya: "19:42"
  },
  Makkah: {
    Subuh: "05:16",
    Syuruq: "06:32",
    Dzuhur: "12:20",
    Ashar: "15:43",
    Maghrib: "18:26",
    Isya: "19:45"
  },
  Jakarta: {
    Subuh: "04:38",
    Syuruq: "05:54",
    Dzuhur: "11:58",
    Ashar: "15:14",
    Maghrib: "18:01",
    Isya: "19:10"
  }
};

export const getPrayerTimesForCity = (city: AppCity, now: Date = new Date()): { prayers: PrayerTimeItem[]; nextPrayer: PrayerTimeItem } => {
  const times = BASE_TIMES[city] || BASE_TIMES.Madinah;
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMin;

  const prayerDefinitions = [
    { name: "Subuh", nameArabic: "الفجر", timeStr: times.Subuh, period: "Pagi" },
    { name: "Dzuhur", nameArabic: "الظهر", timeStr: times.Dzuhur, period: "Siang" },
    { name: "Ashar", nameArabic: "العصر", timeStr: times.Ashar, period: "Sore" },
    { name: "Maghrib", nameArabic: "المغرب", timeStr: times.Maghrib, period: "Petang" },
    { name: "Isya", nameArabic: "العشاء", timeStr: times.Isya, period: "Malam" }
  ];

  // Map into items
  let nextFound = false;
  let nextItem: PrayerTimeItem | null = null;

  const result: PrayerTimeItem[] = prayerDefinitions.map((item) => {
    const [h, m] = item.timeStr.split(":").map(Number);
    const itemTotalMinutes = h * 60 + m;
    const diff = itemTotalMinutes - currentTotalMinutes;

    let isPassed = false;
    let isNext = false;
    let statusLabel = "";

    if (diff < 0) {
      isPassed = true;
      statusLabel = "Selesai";
    } else if (!nextFound) {
      isNext = true;
      nextFound = true;
      if (diff <= 15) {
        statusLabel = "Adzan Segera";
      } else if (diff <= 60) {
        statusLabel = `${diff} Menit Lagi`;
      } else {
        const hoursLeft = Math.floor(diff / 60);
        const minsLeft = diff % 60;
        statusLabel = `${hoursLeft}j ${minsLeft}m lagi`;
      }
    } else {
      statusLabel = item.period;
    }

    const prayerObj: PrayerTimeItem = {
      name: item.name,
      nameArabic: item.nameArabic,
      time: item.timeStr,
      isPassed,
      isNext,
      countdownMinutes: diff > 0 ? diff : undefined,
      statusLabel
    };

    if (isNext) {
      nextItem = prayerObj;
    }

    return prayerObj;
  });

  // If all prayers passed today, tomorrow's Subuh is next
  if (!nextItem) {
    const subuhItem = result[0];
    const [h, m] = subuhItem.time.split(":").map(Number);
    const minutesUntilTomorrowSubuh = 24 * 60 - currentTotalMinutes + (h * 60 + m);
    subuhItem.isNext = true;
    subuhItem.statusLabel = "Besok Subuh";
    subuhItem.countdownMinutes = minutesUntilTomorrowSubuh;
    nextItem = subuhItem;
  }

  return {
    prayers: result,
    nextPrayer: nextItem!
  };
};

export const SUNNAH_RECOMMENDATIONS: Record<AppCity, string[]> = {
  Madinah: [
    "Shalat Rawatib Qobliyah & Ba'diyah di Masjid Nabawi",
    "Memperbanyak Shalat Sunnah di Raudhah Asy-Syarifah",
    "Shalat Dhuha 4 Raka'at & Shalat Sunnah di Masjid Quba",
    "Berdzikir petang sesudah Ashar hingga Maghrib di pelataran Nabawi"
  ],
  Makkah: [
    "Shalat Sunnah Thawaf 2 Raka'at di belakang Maqam Ibrahim",
    "Melipatgandakan Shalat Berjamaah di depan Ka'bah (100.000x lipat)",
    "Memperbanyak Thawaf Sunnah di pelataran Ka'bah",
    "Munajat doa mustajab di antara Rukun Yamani & Multazam"
  ],
  Jakarta: [
    "Shalat Sunnah Safar 2 Raka'at sebelum berangkat",
    "Shalat Rawatib Mu'akkad menjaga ketakwaan",
    "Membaca Surat Al-Kahfi & shalawat atas Nabi SAW"
  ]
};
