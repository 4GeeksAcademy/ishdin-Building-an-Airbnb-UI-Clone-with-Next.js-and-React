export type SortOrder = "asc" | "desc";

interface SortControlProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

const SortControl = ({ value, onChange }: SortControlProps) => {
  return (
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      Sort by price
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as SortOrder)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </label>
  );
};

export default SortControl;
