import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ActiveTab, AppCity, AppSettings, CounterHistoryEntry, NoteItem } from "./types";
import {
  getStoredNotes,
  saveStoredNotes,
  getStoredFavorites,
  saveStoredFavorites,
  getStoredHistory,
  saveStoredHistory,
  getStoredJourneyProgress,
  saveStoredJourneyProgress,
  getStoredSettings,
  saveStoredSettings,
  DEFAULT_NOTES
} from "./lib/storage";
import { usePWAInstall } from "./hooks/usePWAInstall";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { SplashScreen } from "./components/SplashScreen";
import { OfflineIndicator } from "./components/OfflineIndicator";
import { PWAInstallBanner } from "./components/PWAInstallBanner";
import { SupabaseSchemaModal } from "./components/SupabaseSchemaModal";

// Feature Pages
import { HomePage } from "./features/home/HomePage";
import { CounterPage } from "./features/counter/CounterPage";
import { DoaPage } from "./features/doa/DoaPage";
import { NiatPage } from "./features/niat/NiatPage";
import { JourneyPage } from "./features/journey/JourneyPage";
import { NotesPage } from "./features/notes/NotesPage";
import { SettingsPage } from "./features/settings/SettingsPage";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [settings, setSettings] = useState<AppSettings>(getStoredSettings);
  const [notes, setNotes] = useState<NoteItem[]>(getStoredNotes);
  const [favorites, setFavorites] = useState<string[]>(getStoredFavorites);
  const [counterHistory, setCounterHistory] = useState<CounterHistoryEntry[]>(getStoredHistory);
  const [completedActivities, setCompletedActivities] = useState<Record<string, boolean>>(getStoredJourneyProgress);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  // Register service worker if supported
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.debug("Service Worker registration skipped:", err);
      });
    }
  }, []);

  // Update city
  const handleCityChange = (city: AppCity) => {
    const updated = { ...settings, currentCity: city };
    setSettings(updated);
    saveStoredSettings(updated);
  };

  // Update general settings
  const handleUpdateSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    saveStoredSettings(newSettings);
  };

  // Save notes
  const handleSaveNotes = (updated: NoteItem[]) => {
    setNotes(updated);
    saveStoredNotes(updated);
  };

  // Toggle favorite in doa
  const handleToggleFavorite = (prayerId: string) => {
    let updated: string[];
    if (favorites.includes(prayerId)) {
      updated = favorites.filter((id) => id !== prayerId);
    } else {
      updated = [...favorites, prayerId];
    }
    setFavorites(updated);
    saveStoredFavorites(updated);
  };

  // Save counter history
  const handleSaveHistory = (updated: CounterHistoryEntry[]) => {
    setCounterHistory(updated);
    saveStoredHistory(updated);
  };

  // Toggle activity in journey
  const handleToggleActivity = (activityId: string) => {
    const updated = {
      ...completedActivities,
      [activityId]: !completedActivities[activityId]
    };
    setCompletedActivities(updated);
    saveStoredJourneyProgress(updated);
  };

  // Reset all local data
  const handleResetAllData = () => {
    setNotes(DEFAULT_NOTES);
    saveStoredNotes(DEFAULT_NOTES);
    setFavorites(["doa-01", "doa-04", "doa-10"]);
    saveStoredFavorites(["doa-01", "doa-04", "doa-10"]);
    setCounterHistory([]);
    saveStoredHistory([]);
    setCompletedActivities({
      "act-1-1": true,
      "act-1-2": true,
      "act-2-1": true,
      "act-2-2": true
    });
    saveStoredJourneyProgress({
      "act-1-1": true,
      "act-1-2": true,
      "act-2-1": true,
      "act-2-2": true
    });
    alert("Data berhasil direset ke setelan awal.");
  };

  // Navigation tab change with scroll reset
  const handleNavigate = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f0fcf5] text-[#141e1a] font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* Cinematic Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Offline Status Warning Bar */}
      <OfflineIndicator />

      {/* Persistent App Header */}
      <Header
        currentCity={settings.currentCity}
        onCityChange={handleCityChange}
        activeTab={activeTab}
        onNavigate={handleNavigate}
        isInstallable={isInstallable}
        onInstallClick={isIOS ? () => setShowIOSGuide(true) : install}
      />

      {/* Main View Container */}
      <main className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {activeTab === "home" && (
              <HomePage
                currentCity={settings.currentCity}
                notes={notes}
                onSaveNotes={handleSaveNotes}
                onNavigate={handleNavigate}
              />
            )}

            {activeTab === "counter" && (
              <CounterPage
                history={counterHistory}
                onSaveHistory={handleSaveHistory}
              />
            )}

            {activeTab === "doa" && (
              <DoaPage
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            )}

            {activeTab === "niat" && <NiatPage />}

            {activeTab === "journey" && (
              <JourneyPage
                completedActivities={completedActivities}
                onToggleActivity={handleToggleActivity}
              />
            )}

            {activeTab === "notes" && (
              <NotesPage
                notes={notes}
                onSaveNotes={handleSaveNotes}
                onOpenSyncModal={() => setShowSyncModal(true)}
              />
            )}

            {activeTab === "settings" && (
              <SettingsPage
                settings={settings}
                onUpdateSettings={handleUpdateSettings}
                isInstallable={isInstallable}
                isInstalled={isInstalled}
                onInstall={isIOS ? () => setShowIOSGuide(true) : install}
                onOpenSyncModal={() => setShowSyncModal(true)}
                onResetAllData={handleResetAllData}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Bottom Navigation */}
      <Navigation activeTab={activeTab} onTabChange={handleNavigate} />

      {/* PWA Floating Install Banner / Guide */}
      <PWAInstallBanner
        isInstallable={isInstallable}
        isIOS={isIOS}
        showIOSGuide={showIOSGuide}
        onInstall={install}
        onCloseIOSGuide={() => setShowIOSGuide(false)}
        onShowIOSGuide={() => setShowIOSGuide(true)}
      />

      {/* Supabase Schema Modal */}
      <SupabaseSchemaModal
        isOpen={showSyncModal}
        onClose={() => setShowSyncModal(false)}
      />
    </div>
  );
}
