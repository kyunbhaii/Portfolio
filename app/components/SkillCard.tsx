export default function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="border border-gray-800 p-5 rounded-xl hover:border-gray-600 hover:bg-gray-900 hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-green-400 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-2 py-1 text-xs bg-gray-800 rounded hover:bg-gray-700 transition">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
