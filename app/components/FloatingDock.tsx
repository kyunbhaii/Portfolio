"use client";

import {
  ArrowUp,
  Award,
  Briefcase,
  Code2,
  FileCode2,
  GraduationCap,
  House,
  Moon,
  SunMedium,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

const HOME_SECTION_IDS = [
  "about",
  "experience",
  "projects",
  "skills",
  "achievements",
  "education",
] as const;

type HomeDockLink = {
  id: (typeof HOME_SECTION_IDS)[number];
  label: string;
  icon: LucideIcon;
};

type PageDockLink = {
  id: string;
  label: string;
  icon: LucideIcon;
  action: () => void;
};

type DockLink = HomeDockLink | PageDockLink;

const HOME_DOCK_LINKS: HomeDockLink[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "skills", label: "Skills", icon: FileCode2 },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "education", label: "Education", icon: GraduationCap },
];

function hasAction(link: DockLink): link is PageDockLink {
  return "action" in link;
}

function getDockScaleClass(hoveredIndex: number | null, itemIndex: number) {
  if (hoveredIndex === null) return "scale-100";

  const distance = Math.abs(hoveredIndex - itemIndex);

  if (distance === 0) return "scale-[1.28]";
  if (distance === 1) return "scale-[1.12]";
  return "scale-100";
}

function useHomeDockState(isHome: boolean, hideDelay: number) {
  const [activeSection, setActiveSection] = useState<(typeof HOME_SECTION_IDS)[number]>("about");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedWithin, setIsFocusedWithin] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);

  const clearHideTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleHide = useCallback(() => {
    clearHideTimeout();
    timeoutRef.current = setTimeout(() => {
      if (!hoveredRef.current && !focusedRef.current) {
        setIsVisible(false);
      }
    }, hideDelay);
  }, [clearHideTimeout, hideDelay]);

  useEffect(() => {
    hoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    focusedRef.current = isFocusedWithin;
  }, [isFocusedWithin]);

  useEffect(() => {
    if (!isHome) {
      clearHideTimeout();
      return;
    }

    const handleScroll = () => {
      const current = HOME_SECTION_IDS.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.42 && rect.bottom >= window.innerHeight * 0.42;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("about");
      }

      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50;
      const isAtTop = window.scrollY < 120;

      if (isAtBottom || isAtTop) {
        clearHideTimeout();
        setIsVisible(false);
        return;
      }

      setIsVisible(true);
      scheduleHide();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearHideTimeout();
    };
  }, [clearHideTimeout, isHome, scheduleHide]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsVisible(true);
    clearHideTimeout();
  }, [clearHideTimeout]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);

    if (!isHome) {
      setIsVisible(true);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      if (!focusedRef.current) {
        setIsVisible(false);
      }
    }, hideDelay);
  }, [hideDelay, isHome]);

  const handleFocusCapture = useCallback(() => {
    setIsFocusedWithin(true);
    setIsVisible(true);
    clearHideTimeout();
  }, [clearHideTimeout]);

  const handleBlurCapture = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
        return;
      }

      setIsFocusedWithin(false);

      if (!isHome) {
        setIsVisible(true);
        return;
      }

      if (!hoveredRef.current) {
        scheduleHide();
      }
    },
    [isHome, scheduleHide]
  );

  return {
    activeSection,
    shouldShowDock: !isHome || isVisible || isHovered || isFocusedWithin,
    handleMouseEnter,
    handleMouseLeave,
    handleFocusCapture,
    handleBlurCapture,
  };
}

type DockLinkButtonProps = {
  link: DockLink;
  itemIndex: number;
  isActive: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  onActivate: (link: DockLink) => void;
};

function DockLinkButton({
  link,
  itemIndex,
  isActive,
  hoveredIndex,
  setHoveredIndex,
  onActivate,
}: DockLinkButtonProps) {
  const scaleClass = getDockScaleClass(hoveredIndex, itemIndex);

  return (
    <button
      type="button"
      className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out ${
        isActive ? "dock-active-state" : "theme-muted theme-utility-hover theme-utility-surface"
      }`}
      aria-label={link.label}
      onMouseEnter={() => setHoveredIndex(itemIndex)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => onActivate(link)}
    >
      <link.icon
        size={18}
        className={`transition-transform duration-300 ${scaleClass} ${
          isActive && hoveredIndex === null ? "scale-110" : ""
        }`}
      />

      <span className="dock-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[var(--panel-solid)] border text-xs rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {link.label}
      </span>
    </button>
  );
}

export default function FloatingDock() {
  const pathname = usePathname();
  const router = useRouter();
  const { toggleTheme } = useTheme();
  const isHome = pathname === "/";
  const hideDelay = 2200;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const {
    activeSection,
    shouldShowDock,
    handleMouseEnter,
    handleMouseLeave,
    handleFocusCapture,
    handleBlurCapture,
  } = useHomeDockState(isHome, hideDelay);

  const pageLinks = useMemo<PageDockLink[]>(
    () => [
      { id: "home", label: "Home", icon: House, action: () => router.push("/") },
      { id: "top", label: "Top", icon: ArrowUp, action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    ],
    [router]
  );

  const dockLinks = useMemo<DockLink[]>(() => {
    if (isHome) return HOME_DOCK_LINKS;
    if (pathname === "/projects") return pageLinks;

    return [
      pageLinks[0],
      { id: "projects", label: "Projects", icon: Code2, action: () => router.push("/projects") },
      pageLinks[1],
    ];
  }, [isHome, pageLinks, pathname, router]);

  const handleLinkActivate = useCallback(
    (link: DockLink) => {
      if (isHome && !hasAction(link)) {
        const element = document.getElementById(link.id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (hasAction(link)) {
        link.action();
      }
    },
    [isHome]
  );

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        shouldShowDock ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <div className="flex items-center gap-2 px-2 sm:px-4 py-2 bg-[var(--panel-strong)] backdrop-blur-xl border rounded-2xl shadow-[var(--surface-shadow)] theme-border-soft">
        <div className="flex items-center gap-1">
          {dockLinks.map((link, idx) => (
            <DockLinkButton
              key={link.id}
              link={link}
              itemIndex={idx}
              isActive={isHome && !hasAction(link) ? activeSection === link.id : false}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              onActivate={handleLinkActivate}
            />
          ))}
        </div>

        <div className="h-8 w-px bg-[color:var(--border-soft)]" aria-hidden="true"></div>

        <button
          type="button"
          onClick={toggleTheme}
          className="relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out theme-muted theme-utility-hover theme-utility-surface hover:scale-[1.12]"
          aria-label="Toggle theme"
        >
          <SunMedium size={18} className="theme-toggle-sun" />
          <Moon size={18} className="theme-toggle-moon" />
          <span className="dock-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[var(--panel-solid)] border text-xs rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            <span className="theme-toggle-label-night">Night Mode</span>
            <span className="theme-toggle-label-light">Light Mode</span>
          </span>
        </button>
      </div>
    </div>
  );
}
