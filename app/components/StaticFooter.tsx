"use client";

import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';
import UtilityTextLink from './UtilityTextLink';
import { footerLinks, profile } from '../data/site';

export default function StaticFooter() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isProjects = pathname.startsWith('/projects');

  return (
    <footer className="w-full border-t py-10 theme-border-soft theme-solid-panel">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        <div className="theme-muted theme-footer-tone text-sm font-mono tracking-wide mb-4 md:mb-0">
          © {profile.name} | Built with Love
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-mono tracking-wide theme-muted theme-footer-tone">
          {!isHome && (
            <UtilityTextLink href="/">
              Home
            </UtilityTextLink>
          )}
          {!isProjects && (
            <UtilityTextLink href="/projects">
              Projects
            </UtilityTextLink>
          )}
          {footerLinks.map((link) => (
            <UtilityTextLink
              key={link.label}
              href={link.href}
              external={link.external}
            >
              {link.label}
            </UtilityTextLink>
          ))}
          <ThemeToggleButton className="ml-1" />
        </div>
      </div>
    </footer>
  );
}
