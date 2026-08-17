"use client";

import { useState } from "react";
import { HOME_LISTINGS } from "../data/listings";
import ListingCard from "./ListingCard";
import MapPlaceholder from "./MapPlaceholder";
import ResultsHeader from "./ResultsHeader";
import { SortOrder } from "./SortControl";

const CatalogView = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedListings = [...HOME_LISTINGS].sort((first, second) =>
    sortOrder === "asc"
      ? first.pricePerNight - second.pricePerNight
      : second.pricePerNight - first.pricePerNight,
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <ResultsHeader
        count={sortedListings.length}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
        <section aria-label="Catalog listings" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {sortedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </section>
        <MapPlaceholder />
      </div>
    </main>
  );
};

export default CatalogView;
