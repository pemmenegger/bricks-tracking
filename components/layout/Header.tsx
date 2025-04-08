// components/Header.tsx
export default function Header() {
  return (
    <header className="flex items-center justify-between  p-2">
      {/* Left Controls */}
      <div className="flex space-x-2">
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
          ⬅️
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
          ➡️
        </button>
      </div>

      {/* Center Button */}
      <button className="bg-gray-300 text-white px-4 py-1 rounded text-sm font-semibold">
        INSIEME
      </button>

      {/* Right Button */}
      <button className="bg-gray-300 text-white px-4 py-1 rounded text-sm font-semibold">
        FULL MOVIE
      </button>
    </header>
  );
}
