export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-4">
      <div className="w-8 h-8 border-2 border-gray-500 border-t-white rounded-full animate-spin"></div>
      <p className="text-sm text-gray-400 animate-pulse">
        Opening page...
      </p>
    </div>
  );
}
