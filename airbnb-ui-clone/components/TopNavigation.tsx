import Link from "next/link";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

interface TopNavigationProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const TopNavigation = ({ searchValue, onSearchChange }: TopNavigationProps) => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight text-rose-600">
          airbnb
        </Link>
        <div className="min-w-0 flex-1">
          <SearchBar value={searchValue} onChange={onSearchChange} />
        </div>
        <Link href="/catalog" className="hidden text-sm font-semibold text-gray-700 hover:text-rose-600 sm:block">
          Catalog
        </Link>
        <UserMenu />
      </nav>
    </header>
  );
};

export default TopNavigation;
