interface ListingHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

const ListingHeader = ({ title, rating, reviewCount, location }: ListingHeaderProps) => {
  return (
    <header className="border-b border-gray-200 pb-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-3 text-sm text-gray-700">
        ★ {rating.toFixed(2)} · {reviewCount} reviews · <span className="underline">{location}</span>
      </p>
    </header>
  );
};

export default ListingHeader;
