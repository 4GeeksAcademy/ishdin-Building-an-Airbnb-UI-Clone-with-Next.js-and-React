interface GuestCounterProps {
  count: number;
  min: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const GuestCounter = ({ count, min, max, onDecrease, onIncrease }: GuestCounterProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-300 p-3">
      <span className="text-sm font-medium">Guests</span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={onDecrease} disabled={count === min} className="h-8 w-8 rounded-full border border-gray-300 disabled:opacity-30">−</button>
        <span className="w-5 text-center">{count}</span>
        <button type="button" onClick={onIncrease} disabled={count === max} className="h-8 w-8 rounded-full border border-gray-300 disabled:opacity-30">+</button>
      </div>
    </div>
  );
};

export default GuestCounter;
