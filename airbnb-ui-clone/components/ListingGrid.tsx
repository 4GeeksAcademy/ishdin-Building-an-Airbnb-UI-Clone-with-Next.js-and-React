import { Listing } from "../types/listing";
import ListingCard from "./ListingCard";

interface ListingGridProps {
  listings: Listing[];
}

const ListingGrid = ({ listings }: ListingGridProps) => {
  if (listings.length === 0) {
    return <p className="py-16 text-center text-gray-500">No listings match your search.</p>;
  }

  return (
    <section aria-label="Available listings" className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </section>
  );
};

export default ListingGrid;
