"use client";

import Link from 'next/link';
import { User, Briefcase, Code2, Award, FileText, Github, FileCode2, GraduationCap, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function FloatingDock() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false); // Start hidden
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position to update active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'achievements', 'education'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold - if top of section is within middle of viewport
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('about');
      }

      // Hide dock when user reaches the absolute bottom of the page
      // OR if they are at the very top of the page (hero section)
      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50;
      const isAtTop = window.scrollY < 100;
      
      if (isAtBottom || isAtTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        // Reset the idle timer
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        
        scrollTimeout.current = setTimeout(() => {
          if (!isHovered) {
             setIsVisible(false);
          }
        }, 2500); // Hide after 2.5 seconds of no scrolling
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position on mount in case they refresh halfway down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    }
  }, [isHovered]);

  // Only show the dock on the homepage where the sections exist to scroll to
  if (pathname !== '/') return null;

  const internalLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: FileCode2 },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ];

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
      ${isVisible || isHovered ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
      `}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        // Start the hide timer when mouse leaves
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
           setIsVisible(false);
        }, 2500);
      }}
    >
      
      <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
        
        {/* Internal Section Links */}
        <div className="flex items-center gap-1">
          {internalLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out
                  ${isActive ? 'bg-gray-800 text-[#00e5bf] shadow-[0_0_15px_rgba(0,229,191,0.15)]' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}
                `}
                aria-label={link.label}
              >
                <link.icon size={18} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-800 text-xs text-[#00e5bf] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-800 mx-1"></div>

        {/* External Action Links */}
        <div className="flex items-center gap-1">
           <a
              href="https://github.com/kyunbhaii"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[#0a0a0a] text-gray-300 transition-all duration-300 hover:border-[#00e5bf] hover:text-[#00e5bf] hover:shadow-[0_0_12px_rgba(0,229,191,0.2)]"
              aria-label="GitHub"
            >
              <Github size={18} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
               {/* Tooltip */}
               <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-800 text-xs text-[#00e5bf] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  GitHub
                </span>
            </a>

           <a
              href="mailto:vikrmadityamishra@gmail.com"
              className="relative group flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[#0a0a0a] text-gray-300 transition-all duration-300 hover:border-[#00e5bf] hover:text-[#00e5bf] hover:shadow-[0_0_12px_rgba(0,229,191,0.2)]"
              aria-label="Email"
            >
              <Mail size={18} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-800 text-xs text-[#00e5bf] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Email
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center gap-1.5 px-3 h-10 rounded-full border border-gray-700 bg-[#0a0a0a] text-gray-300 transition-all duration-300 hover:border-[#00e5bf] hover:text-[#00e5bf] hover:shadow-[0_0_12px_rgba(0,229,191,0.2)]"
              aria-label="Resume"
            >
              <FileText size={16} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-medium relative z-10">Resume</span>
            </a>
        </div>

      </div>
    </div>
  );
}
