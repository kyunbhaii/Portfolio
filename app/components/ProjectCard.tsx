"use client";

import { useRouter } from 'next/navigation';
import BoxActionLink from './BoxActionLink';

interface ProjectCardProps {
  title: string;
  description: string;
  details?: string[];
  impact?: string;
  techStack: string[];
  githubUrl: string;
  projectUrl?: string;
  featuredText?: string;
  date?: string;
  dateLayout?: 'inline' | 'subtitle';
}

export default function ProjectCard({
  title,
  description,
  details = [],
  impact,
  techStack,
  githubUrl,
  projectUrl,
  featuredText,
  date,
  dateLayout = 'subtitle'
}: ProjectCardProps) {
  const content = (
    <div className="flex flex-col h-full transition-transform duration-300 group-hover/card:-translate-y-0.5">
      {featuredText && <p className="theme-featured-label text-xs mb-3 font-mono uppercase tracking-[0.24em]">{featuredText}</p>}
      
      <div className={dateLayout === 'inline' ? "flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-x-4 gap-y-2" : "mb-3"}>
        <h3 className={`font-semibold break-words leading-tight theme-accent ${dateLayout === 'inline' ? 'text-2xl tracking-tight' : 'text-xl tracking-tight'}`}>{title}</h3>
        {date && (
          <p className={dateLayout === 'inline' ? "theme-date font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap" : "theme-date font-mono text-xs mt-0.5 uppercase tracking-[0.12em]"}>
            {date}
          </p>
        )}
      </div>

      <div className="flex-grow flex flex-col">
        <p className="theme-muted-strong font-medium min-h-[3rem] mb-3 leading-relaxed">{description}</p>

        <div className="flex-grow flex flex-col justify-center pb-4">
          {projectUrl && (
            <BoxActionLink
              href={projectUrl}
              className="self-start mt-1 mb-4 text-xs px-3 py-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              View System Design
            </BoxActionLink>
          )}

          {impact && (
            <p className="theme-impact text-xs italic mb-4 leading-relaxed border-l pl-3">{impact}</p>
          )}

          {details.length > 0 && (
            <ul className="space-y-2.5 text-sm theme-muted">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="theme-bullet mr-2">{"•"}</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-2 pr-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="theme-tag px-2.5 py-1 text-xs rounded-md theme-muted border theme-border-strong bg-[var(--panel-solid)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto shrink-0">
            <BoxActionLink
              href={githubUrl}
              external
              className="text-xs px-3 py-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub ↗
            </BoxActionLink>
          </div>
        </div>
      </div>
    </div>
  );

  const router = useRouter();

  const handleCardClick = () => {
    if (projectUrl) {
      router.push(projectUrl);
    }
  };

  return (
    <div 
      className={`soft-panel interactive-card group/card relative p-6 rounded-2xl w-full h-full flex flex-col ${projectUrl ? 'cursor-pointer' : ''}`}
      onClick={handleCardClick}
    >
      {content}
    </div>
  );
}
