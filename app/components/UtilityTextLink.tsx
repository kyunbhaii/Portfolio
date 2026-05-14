"use client";

import Link from "next/link";

type UtilityTextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function UtilityTextLink({
  href,
  children,
  className = "",
  external = false,
  onClick,
}: UtilityTextLinkProps) {
  const sharedClassName = `theme-footer-link theme-utility-hover theme-utility-text hover:scale-110 transform transition-all duration-200 ease-out inline-block relative group ${className}`.trim();
  const isMailto = href.startsWith("mailto:");
  const underline = (
    <span className="theme-utility-underline absolute -bottom-0.5 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  );

  if (external || isMailto) {
    return (
      <a
        href={href}
        target={isMailto ? undefined : "_blank"}
        rel={isMailto ? undefined : "noopener noreferrer"}
        className={sharedClassName}
        onClick={onClick}
      >
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName} onClick={onClick}>
      {children}
      {underline}
    </Link>
  );
}
