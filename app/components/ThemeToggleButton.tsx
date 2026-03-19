"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type ThemeToggleButtonProps = {
  className?: string;
  iconSize?: number;
};

export default function ThemeToggleButton({
  className = "",
  iconSize = 18,
}: ThemeToggleButtonProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className={`relative group inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-out theme-footer-link theme-muted theme-utility-hover theme-utility-surface hover:scale-[1.08] ${className}`.trim()}
    >
      <SunMedium size={iconSize} className="theme-toggle-sun" />
      <Moon size={iconSize} className="theme-toggle-moon" />
      <span className="dock-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[var(--panel-solid)] border text-xs rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span className="theme-toggle-label-night">Night Mode</span>
        <span className="theme-toggle-label-light">Light Mode</span>
      </span>
    </button>
  );
}
