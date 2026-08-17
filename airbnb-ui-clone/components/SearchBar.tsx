"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <label className="relative block w-full max-w-xl">
      <span className="sr-only">Search listings</span>
      <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search stays or destinations"
        className="w-full rounded-full border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
      />
    </label>
  );
};

export default SearchBar;
