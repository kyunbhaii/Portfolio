export default function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="surface-panel p-5 rounded-2xl hover:border-[color:var(--border-strong)] hover:translate-y-[-2px] transition-all duration-300 min-h-[116px]">
      <h3 className="theme-accent mb-3 font-mono text-[1.05rem]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="theme-tag px-2.5 py-1 text-xs rounded-md theme-muted bg-[var(--panel-solid)] border theme-border-soft">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
