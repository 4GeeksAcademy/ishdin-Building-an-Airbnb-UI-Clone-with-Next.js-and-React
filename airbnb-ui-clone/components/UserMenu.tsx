const UserMenu = () => {
  return (
    <div className="flex items-center gap-2" aria-label="User menu">
      <button type="button" aria-label="Open language settings" className="rounded-full p-2 text-lg hover:bg-gray-100">◎</button>
      <button type="button" aria-label="Open user menu" className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 shadow-sm hover:shadow-md">
        <span aria-hidden="true">☰</span>
        <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-600 text-xs text-white">●</span>
      </button>
    </div>
  );
};

export default UserMenu;
