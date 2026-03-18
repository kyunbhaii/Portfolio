"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StaticFooter() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isProjects = pathname.startsWith('/projects');

  return (
    <footer className="w-full border-t border-gray-800 bg-[#0a0a0a] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-gray-400 text-sm font-mono tracking-wide mb-4 md:mb-0">
          © 2026 Vikramaditya Mishra | Built with Love
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-mono tracking-wide text-gray-400">
          {!isHome && (
            <Link href="/" className="hover:text-[#00e5bf] hover:scale-125 transform transition-all duration-200 ease-out inline-block">
              Home
            </Link>
          )}
          {!isProjects && (
            <Link href="/projects" className="hover:text-[#00e5bf] hover:scale-125 transform transition-all duration-200 ease-out inline-block">
              Projects
            </Link>
          )}
          <a href="https://x.com/Kyunbhaii" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5bf] hover:scale-125 transform transition-all duration-200 ease-out inline-block">
            X
          </a>
          <a href="https://www.linkedin.com/in/scmvikram/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5bf] hover:scale-125 transform transition-all duration-200 ease-out inline-block">
            LinkedIn
          </a>
          <a href="https://github.com/kyunbhaii" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5bf] hover:scale-125 transform transition-all duration-200 ease-out inline-block">
            Github
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5bf] hover:scale-125 transform transition-all duration-200 ease-out inline-block">
            Resume
          </a>
        </div>

      </div>
    </footer>
  );
}
