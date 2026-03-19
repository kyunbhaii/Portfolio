"use client";

import Link from "next/link";

type BoxActionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function BoxActionLink({
  href,
  children,
  className = "",
  external = false,
  onClick,
}: BoxActionLinkProps) {
  const sharedClassName = `theme-box-button group/button relative border theme-border-subtle rounded transition overflow-hidden ${className}`.trim();
  const content = (
    <>
      <span className="theme-cta-fill absolute inset-0 w-0 group-hover/button:w-full transition-all duration-300 ease-out" />
      <span className="theme-box-button-label relative z-10">{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClassName} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName} onClick={onClick}>
      {content}
    </Link>
  );
}
