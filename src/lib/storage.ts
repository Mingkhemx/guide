import { NoteItem, CounterHistoryEntry, JourneyDay, UserSettings } from "../types";
import { INITIAL_JOURNEY_DAYS } from "../data/journeyData";

const NOTES_KEY = "umrah_notes_v1";
const FAVORITES_KEY = "umrah_fav_prayers_v1";
const JOURNEY_KEY = "umrah_journey_v1";
const HISTORY_KEY = "umrah_counter_history_v1";
const SETTINGS_KEY = "umrah_settings_v1";

export const DEFAULT_NOTES: NoteItem[] = [
  {
    id: "note-1",
    title: "Doa untuk Orang Tua & Keluarga Besar",
    content: "Khusus dibaca saat di Multazam & Raudhah. Memohon kesehatan panjang, ampunan dosa almarhum kakek-nenek, dan keharmonisan keluarga.",
    category: "Orang Tua & Keluarga",
    favorite: true,
    completed: true,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: "note-2",
    title: "Kelancaran Rezeki & Berkah Usaha",
    content: "Titipan dari adik & rekan kerja di kantor. Memohon keberkahan usaha toko, bebas hutang, dan rezeki halal yang melimpah ruah.",
    category: "Titipan Rekan",
    favorite: false,
    completed: false,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: "note-3",
    title: "Kesehatan & Keselamatan Rombongan",
    content: "Doa umum safar agar seluruh jamaah kloter diberikan fisik kuat, terhindar dari dehidrasi, dan pulang membawa umrah mabrur.",
    category: "Doa Khusus",
    favorite: false,
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: "note-4",
    title: "Permohonan Anak Keturunan Saleh & Berbakti",
    content: "Memohon keturunan yang qurrata a'yun, mencintai Al-Qur'an dan menjadi penyejuk hati kedua orang tua di dunia dan akhirat.",
    category: "Hajat Pribadi",
    favorite: true,
    completed: false,
    createdAt: new Date().toISOString()
  }
];

const DEFAULT_SETTINGS: UserSettings = {
  name: "Fajar",
  currentCity: "Madinah",
  currentUmrahDay: 3,
  fontSize: "normal",
  hapticFeedback: true,
  soundEnabled: true,
  prayerCalculation: "Umm al-Qura (Makkah)"
};

// Storage helper functions
export const getStoredNotes = (): NoteItem[] => {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    if (!raw) {
      localStorage.setItem(NOTES_KEY, JSON.stringify(DEFAULT_NOTES));
      return DEFAULT_NOTES;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_NOTES;
  }
};

export const saveStoredNotes = (notes: NoteItem[]): void => {
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (err) {
    console.warn("Storage quota or error saving notes", err);
  }
};

export const getStoredFavorites = (): string[] => {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return ["doa-safar-lengkap", "doa-melihat-kabah", "doa-istilam-hajar-aswad", "doa-raudhah-mustajab"];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveStoredFavorites = (favs: string[]): void => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch (err) {
    console.warn("Storage error saving favorites", err);
  }
};

export const getStoredJourney = (): JourneyDay[] => {
  try {
    const raw = localStorage.getItem(JOURNEY_KEY);
    if (!raw) {
      localStorage.setItem(JOURNEY_KEY, JSON.stringify(INITIAL_JOURNEY_DAYS));
      return INITIAL_JOURNEY_DAYS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_JOURNEY_DAYS;
  }
};

export const saveStoredJourney = (days: JourneyDay[]): void => {
  try {
    localStorage.setItem(JOURNEY_KEY, JSON.stringify(days));
  } catch (err) {
    console.warn("Storage error saving journey", err);
  }
};

export const getStoredCounterHistory = (): CounterHistoryEntry[] => {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveStoredCounterHistory = (history: CounterHistoryEntry[]): void => {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (err) {
    console.warn("Storage error saving history", err);
  }
};

export const getStoredSettings = (): UserSettings => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
};

export const saveStoredSettings = (settings: UserSettings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.warn("Storage error saving settings", err);
  }
};

// Ready-to-run Supabase PostgreSQL Schema DDL
export const SUPABASE_SCHEMA_SQL = `-- Supabase Schema for Umrah Companion
-- Execute in Supabase SQL Editor

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  current_city TEXT DEFAULT 'Madinah',
  current_umrah_day INT DEFAULT 3,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Prayer Notes Table (Local-First Sync)
CREATE TABLE IF NOT EXISTS public.prayer_notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT DEFAULT 'Doa Khusus',
  favorite BOOLEAN DEFAULT false,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Favorites Table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  item_id TEXT NOT NULL,
  item_type TEXT NOT NULL, -- 'prayer' or 'niat'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, item_id, item_type)
);

-- 4. Journey Progress Table
CREATE TABLE IF NOT EXISTS public.journey_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  day_number INT NOT NULL,
  checklist_id TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, day_number, checklist_id)
);

-- 5. Counter History Table (Tawaf & Sa'i)
CREATE TABLE IF NOT EXISTS public.counter_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('tawaf', 'sai')),
  completed_rounds INT NOT NULL,
  total_target INT DEFAULT 7,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prayer_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.journey_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.counter_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view and update their own profile"
  ON public.profiles FOR ALL USING (auth.uid() = id);

CREATE POLICY "Users can view and manage their own notes"
  ON public.prayer_notes FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage favorites"
  ON public.favorites FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage journey progress"
  ON public.journey_progress FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage counter history"
  ON public.counter_history FOR ALL USING (auth.uid() = user_id);
`;

export const SUPABASE_SQL_SCHEMA = SUPABASE_SCHEMA_SQL;

// Aliases for storage functions
export const getStoredHistory = getStoredCounterHistory;
export const saveStoredHistory = saveStoredCounterHistory;

const JOURNEY_PROGRESS_KEY = "umrah_journey_progress_v1";

export const getStoredJourneyProgress = (): Record<string, boolean> => {
  try {
    const raw = localStorage.getItem(JOURNEY_PROGRESS_KEY);
    if (!raw) {
      return {
        "d1-1": true,
        "d1-2": true,
        "d1-3": true,
        "d1-4": true,
        "d2-1": true,
        "d2-2": true,
        "d2-3": true,
        "d2-4": true,
        "d3-1": true,
        "d3-2": true
      };
    }
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

export const saveStoredJourneyProgress = (progress: Record<string, boolean>): void => {
  try {
    localStorage.setItem(JOURNEY_PROGRESS_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn("Storage error saving journey progress", err);
  }
};

