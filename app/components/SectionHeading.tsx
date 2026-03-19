type SectionHeadingProps = {
  title: string;
  className?: string;
};

export default function SectionHeading({
  title,
  className = "mb-6",
}: SectionHeadingProps) {
  return (
    <h2 className={`section-title text-2xl font-semibold flex items-center gap-3 tracking-tight ${className}`.trim()}>
      <span className="section-marker w-1.5 h-6 rounded-full"></span>
      {title}
    </h2>
  );
}
