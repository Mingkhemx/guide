export type TawafRoundType = "guide" | "dhikr" | "optional_prayer";

export type TawafRound = {
  round: number;
  title: string;
  arabic?: string;
  latin?: string;
  translation?: string;
  type: TawafRoundType;
  reference?: string;
  tips?: string;
};

export type SaiRound = {
  round: number;
  from: "Shafa" | "Marwah";
  to: "Shafa" | "Marwah";
  title: string;
  arabic?: string;
  latin?: string;
  translation?: string;
  greenZoneInstruction: string;
  duaGreenZone?: {
    arabic: string;
    latin: string;
    translation: string;
  };
  reference?: string;
};

export type PrayerCategory =
  | "Travel"
  | "Umrah"
  | "Tawaf"
  | "Sai"
  | "Tahallul"
  | "Madinah"
  | "Return";

export type PrayerItem = {
  id: string;
  title: string;
  category: PrayerCategory;
  arabic: string;
  latin: string;
  translation: string;
  reference: string;
  isFavorite?: boolean;
  occasion?: string;
};

export type NiatCategory =
  | "niat_umrah"
  | "niat_haji"
  | "talbiyah"
  | "shalawat"
  | "doa_talbiyah";

export type NiatItem = {
  id: string;
  title: string;
  subtitle: string;
  arabic: string;
  latin: string;
  translation: string;
  instruction?: string;
  category: NiatCategory;
  reference?: string;
};

export type JourneyChecklistItem = {
  id: string;
  text: string;
  completed: boolean;
  time?: string;
};

export type JourneyDay = {
  day: number;
  title: string;
  location: string;
  phase: string;
  activities: string[];
  prayers: string[];
  checklist: JourneyChecklistItem[];
  completed: boolean;
  iconName?: string;
};

export type NoteItem = {
  id: string;
  title: string;
  content: string;
  category: string;
  favorite: boolean;
  completed: boolean;
  createdAt: string;
};

export type CounterHistoryEntry = {
  id: string;
  type: "tawaf" | "sai";
  completedRounds: number;
  totalTarget: number;
  startedAt: string;
  completedAt?: string;
  notes?: string;
};

export type AppCity = "Madinah" | "Makkah" | "Jakarta";

export type UserSettings = {
  name: string;
  currentCity: AppCity;
  currentUmrahDay: number;
  fontSize: "normal" | "large" | "extra-large";
  hapticFeedback: boolean;
  soundEnabled: boolean;
  prayerCalculation: string;
  notificationsEnabled?: boolean;
  hapticEnabled?: boolean;
};

export type AppSettings = UserSettings;

export type ActiveTab = "home" | "counter" | "doa" | "niat" | "journey" | "notes" | "settings";
