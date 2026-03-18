"use client";

import { ArrowUp, Award, Briefcase, Code2, FileCode2, GraduationCap, House, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function FloatingDock() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedWithin, setIsFocusedWithin] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const hideDelay = 2200;
  const shouldShowDock = !isHome || isVisible || isHovered || isFocusedWithin;

  useEffect(() => {
    if (!isHome) return;

    const sections = ['about', 'experience', 'projects', 'skills', 'achievements', 'education'];

    const scheduleHide = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (!isHovered && !isFocusedWithin) {
          setIsVisible(false);
        }
      }, hideDelay);
    };

    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.42 && rect.bottom >= window.innerHeight * 0.42;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('about');
      }

      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50;
      const isAtTop = window.scrollY < 120;

      if (isAtBottom || isAtTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        scheduleHide();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    }
  }, [isFocusedWithin, isHome, isHovered]);

  const internalLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: FileCode2 },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ];
  const pageLinks = [
    { id: 'home', label: 'Home', icon: House, action: () => router.push('/') },
    { id: 'top', label: 'Top', icon: ArrowUp, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
  ];
  const dockLinks = isHome
    ? internalLinks
    : pathname === '/projects'
      ? pageLinks
      : [
          pageLinks[0],
          { id: 'projects', label: 'Projects', icon: Code2, action: () => router.push('/projects') },
          pageLinks[1]
        ];

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
      ${shouldShowDock ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
      `}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!isHome) {
          setIsVisible(true);
          return;
        }

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          if (!isFocusedWithin) {
            setIsVisible(false);
          }
        }, hideDelay);
      }}
      onFocusCapture={() => {
        setIsFocusedWithin(true);
        setIsVisible(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocusedWithin(false);
          if (!isHome) {
            setIsVisible(true);
            return;
          }

          if (!isHovered) {
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
              setIsVisible(false);
            }, hideDelay);
          }
        }
      }}
    >

      <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0)),rgba(10,10,10,0.84)] backdrop-blur-xl border border-gray-800/90 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1">
          {dockLinks.map((link, idx) => {
            const isActive = isHome ? activeSection === link.id : false;
            const distanceFromHovered = hoveredIndex === null ? null : Math.abs(hoveredIndex - idx);
            const scaleClass =
              distanceFromHovered === 0
                ? 'scale-[1.28]'
                : distanceFromHovered === 1
                  ? 'scale-[1.12]'
                  : 'scale-100';

            return (
              <button
                key={link.id}
                type="button"
                className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out
                  ${isActive ? 'bg-gray-800 text-[#00e5bf] shadow-[0_0_18px_rgba(0,229,191,0.16)]' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'}
                `}
                aria-label={link.label}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (isHome) {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    link.action();
                  }
                }}
              >
                <link.icon size={18} className={`transition-transform duration-300 ${scaleClass} ${isActive && hoveredIndex === null ? 'scale-110' : ''}`} />

                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-950/95 border border-gray-800 text-xs text-[#00e5bf] rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
