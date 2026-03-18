"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
    <div className={`flex flex-col h-full ${projectUrl ? "cursor-pointer transition-all duration-200 hover:scale-[1.01]" : ""}`}>
      {featuredText && <p className="text-xs text-[#00e5bf]/75 mb-3 font-mono uppercase tracking-[0.24em]">{featuredText}</p>}
      
      <div className={dateLayout === 'inline' ? "flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-x-4 gap-y-2" : "mb-3"}>
        <h3 className={`font-semibold break-words leading-tight text-[#00e5bf] ${dateLayout === 'inline' ? 'text-2xl tracking-tight' : 'text-xl tracking-tight'}`}>{title}</h3>
        {date && (
          <p className={dateLayout === 'inline' ? "text-[#00e5bf]/80 font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap" : "text-[#00e5bf]/75 font-mono text-xs mt-0.5 uppercase tracking-[0.12em]"}>
            {date}
          </p>
        )}
      </div>

      <div className="flex-grow flex flex-col">
        <p className="text-gray-200 font-medium min-h-[3rem] mb-3 leading-relaxed">{description}</p>

        <div className="flex-grow flex flex-col justify-center pb-4">
          {projectUrl && (
            <Link
              href={projectUrl}
              className="relative self-start mt-1 mb-4 text-xs border border-gray-700 px-3 py-1.5 rounded hover:border-[#00e5bf] hover:text-[#00e5bf] transition overflow-hidden group"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="absolute inset-0 bg-[#00e5bf]/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
              <span className="relative z-10">View System Design</span>
            </Link>
          )}

          {impact && (
            <p className="text-xs text-[#00e5bf]/70 italic mb-4 leading-relaxed border-l border-[#00e5bf]/30 pl-3">{impact}</p>
          )}

          {details.length > 0 && (
            <ul className="space-y-2.5 text-sm text-gray-400">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-[#00e5bf]/80">{"•"}</span>
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
                className="px-2.5 py-1 text-xs bg-gray-900/90 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto shrink-0">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-xs border border-gray-700 px-3 py-1.5 rounded hover:border-[#00e5bf] hover:text-[#00e5bf] transition overflow-hidden group"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="absolute inset-0 bg-[#00e5bf]/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
              <span className="relative z-10">GitHub ↗</span>
            </a>
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
      className={`relative border border-gray-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)),rgba(10,10,10,0.82)] p-6 rounded-2xl hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out w-full h-full flex flex-col ${projectUrl ? 'cursor-pointer' : ''}`}
      onClick={handleCardClick}
    >
      {content}
    </div>
  );
}
