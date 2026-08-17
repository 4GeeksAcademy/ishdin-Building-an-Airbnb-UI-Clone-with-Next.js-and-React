import Link from "next/link";
import SortControl, { SortOrder } from "./SortControl";

interface ResultsHeaderProps {
  count: number;
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

const ResultsHeader = ({ count, sortOrder, onSortChange }: ResultsHeaderProps) => {
  return (
    <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link href="/" className="text-sm font-medium text-rose-600 hover:underline">
          ← Home
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">Catalog</h1>
        <p className="mt-1 text-sm text-gray-500">{count} results</p>
      </div>
      <SortControl value={sortOrder} onChange={onSortChange} />
    </header>
  );
};

export default ResultsHeader;
