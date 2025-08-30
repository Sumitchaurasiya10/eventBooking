export default function Loader() {
  return (
    <div className="flex justify-center items-center py-20">
      {/* Floating Gradient Loader */}
      <div className="relative w-16 h-16">
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 blur-xl animate-pulse" />

        {/* Loader Circle */}
        <div className="w-16 h-16 border-4 border-transparent border-t-pink-400 border-l-purple-400 rounded-full animate-spin relative z-10 shadow-lg shadow-pink-500/30" />
      </div>
    </div>
  );
}
