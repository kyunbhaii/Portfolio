import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function ClaimLensSectionHeading({
  title,
  className = "mb-3",
}: SectionHeadingProps) {
  return (
    <h2 className={`text-xl font-semibold flex items-center gap-3 ${className}`.trim()}>
      <span className="theme-claimlens-section-marker w-1 h-5 rounded-full"></span>
      {title}
    </h2>
  );
}

type DiagramShellProps = {
  kicker: string;
  title: string;
  description: string;
  className?: string;
  children: ReactNode;
};

export function ClaimLensDiagramShell({
  kicker,
  title,
  description,
  className = "",
  children,
}: DiagramShellProps) {
  return (
    <div className={`border theme-border-subtle rounded-2xl p-6 theme-border-soft ${className}`.trim()}>
      <div className="flex flex-col gap-2 mb-6">
        <p className="theme-claimlens-kicker text-xs font-mono tracking-[0.3em] uppercase">{kicker}</p>
        <h3 className="text-base font-semibold theme-muted-strong">{title}</h3>
        <p className="text-sm theme-muted">{description}</p>
      </div>
      {children}
    </div>
  );
}

type DiagramNodeProps = {
  title: string;
  subtitle: string;
  strong?: boolean;
  className?: string;
};

export function ClaimLensDiagramNode({
  title,
  subtitle,
  strong = false,
  className = "",
}: DiagramNodeProps) {
  return (
    <div
      className={`claimlens-diagram-node rounded-2xl border px-5 py-5 ${
        strong
          ? "claimlens-diagram-node-strong border-[color:rgb(var(--accent-rgb)/0.35)] bg-[color:rgb(var(--accent-rgb)/0.08)] shadow-[0_0_20px_rgb(var(--accent-rgb)/0.06)]"
          : "border-[color:rgb(var(--accent-rgb)/0.18)] bg-[color:rgb(var(--accent-rgb)/0.04)]"
      } ${className}`.trim()}
    >
      <p
        className={`theme-claimlens-node-title text-sm font-mono ${
          strong ? "theme-claimlens-node-title-strong text-[var(--accent)]" : "text-[color:rgb(var(--accent-rgb)/0.82)]"
        }`}
      >
        {title}
      </p>
      <p className="text-xs theme-muted mt-2 leading-relaxed">{subtitle}</p>
    </div>
  );
}

export function ClaimLensDiagramArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`theme-claimlens-arrow hidden lg:flex items-center justify-center text-2xl ${className}`.trim()}>
      →
    </div>
  );
}

type DiagramTagPanelProps = {
  title: string;
  items: string[];
};

export function ClaimLensDiagramTagPanel({
  title,
  items,
}: DiagramTagPanelProps) {
  return (
    <div className="claimlens-diagram-panel rounded-xl border border-[color:rgb(var(--accent-rgb)/0.14)] bg-[color:rgb(var(--accent-rgb)/0.03)] p-4">
      <p className="theme-claimlens-panel-kicker text-xs font-mono uppercase tracking-[0.2em] mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="claimlens-diagram-pill rounded-full border border-[color:rgb(var(--accent-rgb)/0.16)] bg-[color:rgb(var(--accent-rgb)/0.05)] px-3 py-1 text-xs theme-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type DiagramLanePanelProps = {
  title: string;
  items: string[];
};

export function ClaimLensDiagramLanePanel({
  title,
  items,
}: DiagramLanePanelProps) {
  return (
    <div className="claimlens-diagram-panel rounded-2xl border border-[color:rgb(var(--accent-rgb)/0.14)] bg-[color:rgb(var(--accent-rgb)/0.03)] p-5">
      <p className="theme-claimlens-panel-kicker text-xs font-mono uppercase tracking-[0.2em] mb-4">{title}</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="claimlens-diagram-pill rounded-xl border border-[color:rgb(var(--accent-rgb)/0.16)] bg-[color:rgb(var(--accent-rgb)/0.05)] px-4 py-3 text-sm theme-muted"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

type CalloutProps = {
  children: ReactNode;
  strong?: boolean;
};

export function ClaimLensCallout({ children, strong = false }: CalloutProps) {
  return (
    <div
      className={`theme-claimlens-callout border-l-2 rounded-r-xl pl-5 pr-4 ${
        strong
          ? "theme-claimlens-callout-strong border-[#00e5bf] bg-[#00e5bf]/[0.05] py-5"
          : "border-[#00e5bf]/40 bg-[#00e5bf]/[0.03] py-4 space-y-3"
      }`}
    >
      {children}
    </div>
  );
}
