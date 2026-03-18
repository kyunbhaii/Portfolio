"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  title: string;
  description: string;
  details?: string[];
  techStack: string[];
  githubUrl: string;
  projectUrl?: string;
  featuredText?: string;
  date?: string;
  dateLayout?: 'inline' | 'subtitle';
  truncate?: boolean;
}

export default function ProjectCard({
  title,
  description,
  details = [],
  techStack,
  githubUrl,
  projectUrl,
  featuredText,
  date,
  dateLayout = 'subtitle',
  truncate = false
}: ProjectCardProps) {
  const content = (
    <div className={`flex flex-col h-full pr-4 ${projectUrl ? "cursor-pointer transition-all duration-200 hover:scale-[1.01]" : ""}`}>
      {featuredText && <p className="text-xs text-[#00e5bf] mb-2 font-mono">{featuredText}</p>}
      
      <div className={dateLayout === 'inline' ? "flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-x-4" : "mb-2"}>
        <h3 className={`font-semibold break-words leading-tight text-[#00e5bf] ${dateLayout === 'inline' ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
        {date && (
          <p className={dateLayout === 'inline' ? "text-[#00e5bf] font-mono text-sm mt-2 sm:mt-0 whitespace-nowrap" : "text-[#00e5bf] font-mono text-xs mt-0.5"}>
            {date}
          </p>
        )}
      </div>

      <div className="flex-grow flex flex-col">
        <div className="mb-4">
          <p className="text-gray-300 font-medium min-h-[3rem]">{description}</p>
          
          {details.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-[#00e5bf]">{"•"}</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6">
          <div className="flex flex-wrap gap-2 pr-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-gray-800/80 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-xs border border-gray-700 px-3 py-1.5 rounded hover:border-[#00e5bf] hover:text-[#00e5bf] transition overflow-hidden group ml-auto shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="absolute inset-0 bg-[#00e5bf]/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
            <span className="relative z-10">GitHub ↗</span>
          </a>
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
      className={`relative border border-gray-800 p-6 rounded-2xl hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out w-full h-full flex flex-col ${projectUrl ? 'cursor-pointer' : ''}`}
      onClick={handleCardClick}
    >
      {content}
    </div>
  );
}
