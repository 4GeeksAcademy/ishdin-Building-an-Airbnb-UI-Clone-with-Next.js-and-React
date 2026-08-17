import Link from "next/link";

const RoomTopBar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/catalog" className="font-semibold text-gray-800 hover:text-rose-600">
          ← Back to catalog
        </Link>
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-rose-600">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default RoomTopBar;
