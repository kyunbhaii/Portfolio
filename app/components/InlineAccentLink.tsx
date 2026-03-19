type InlineAccentLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function InlineAccentLink({
  href,
  children,
}: InlineAccentLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="theme-copy-strong font-medium relative group inline-block transition-colors hover:text-[var(--accent)]"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </a>
  );
}
