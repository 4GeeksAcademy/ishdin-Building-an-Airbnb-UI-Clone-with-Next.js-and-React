const LoadingIndicator = () => {
  return (
    <div className="flex min-h-64 items-center justify-center" role="status" aria-live="polite">
      <div className="text-center">
        <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-gray-200 border-t-rose-500" />
        <p className="mt-3 text-sm text-gray-500">Loading listings...</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
