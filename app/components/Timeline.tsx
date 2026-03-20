import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type TimelineSectionProps = {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
};

export function TimelineSection({
  id,
  title,
  className = "",
  children,
}: TimelineSectionProps) {
  return (
    <section id={id} className={className}>
      <SectionHeading title={title} />
      <div className="editorial-panel rounded-[2rem] p-6 sm:p-8">
        <div className="relative ml-3 space-y-10 border-l-2 pl-6 py-2 theme-border-subtle">
          {children}
        </div>
      </div>
    </section>
  );
}

type TimelineItemProps = {
  children: ReactNode;
  className?: string;
};

export function TimelineItem({
  children,
  className = "",
}: TimelineItemProps) {
  return (
    <div className={`group/item relative ${className}`.trim()}>
      <span className="timeline-node absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full transition-transform duration-300 group-hover/item:scale-125"></span>
      {children}
    </div>
  );
}
