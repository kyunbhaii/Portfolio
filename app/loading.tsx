export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[color:rgb(var(--accent-rgb)/0.06)] backdrop-blur-md z-50 flex flex-col items-center justify-center gap-4">
      <div className="w-8 h-8 border-2 border-[color:var(--border-strong)] border-t-[var(--foreground)] rounded-full animate-spin"></div>
      <p className="text-sm theme-muted animate-pulse">
        Opening page...
      </p>
    </div>
  );
}
