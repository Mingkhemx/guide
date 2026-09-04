import React from "react";
import { motion } from "motion/react";
import { Home, RefreshCw, BookOpen, HandHeart, MapPin } from "lucide-react";
import { ActiveTab } from "../types";

interface NavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: "home" as ActiveTab, label: "Home", icon: Home },
    { id: "counter" as ActiveTab, label: "Tawaf & Sa'i", icon: RefreshCw },
    { id: "doa" as ActiveTab, label: "Doa", icon: BookOpen },
    { id: "niat" as ActiveTab, label: "Niat", icon: HandHeart },
    { id: "journey" as ActiveTab, label: "Journey", icon: MapPin },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none pb-safe">
      <div className="max-w-[480px] mx-auto px-4 pb-3 pointer-events-auto">
        <div className="relative flex items-center justify-around h-16 px-2 rounded-2xl bg-white/92 backdrop-blur-2xl shadow-[0_12px_36px_rgba(11,93,75,0.15)] border border-emerald-900/10">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`relative flex flex-col items-center justify-center min-w-[56px] h-12 py-1 px-1 rounded-xl transition-all duration-200 ${
                  isActive ? "text-[#004435] font-semibold" : "text-[#5A6560] hover:text-[#141e1a]"
                }`}
              >
                {/* Active Indicator Backdrop */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-emerald-50/90 rounded-xl -z-10 border border-emerald-200/50"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}

                {/* Icon with subtle scale */}
                <div className={`transition-transform duration-200 ${isActive ? "scale-110" : ""}`}>
                  <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px] text-[#004435]" : "stroke-[1.8px]"}`} />
                </div>

                {/* Label */}
                <span className={`text-[11px] leading-tight mt-1 truncate ${isActive ? "font-bold text-[#004435]" : "font-medium"}`}>
                  {item.label}
                </span>

                {/* Active Bottom Indicator Dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute bottom-1 w-4 h-0.5 rounded-full bg-[#004435]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
