import Link from "next/link";
import { Listing } from "../types/listing";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="group block">
      <article>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300">
          <div className="flex h-full items-center justify-center text-sm font-medium text-gray-500 transition group-hover:scale-105">
            Photo placeholder
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-semibold text-gray-900">{listing.title}</h2>
            <span className="shrink-0 text-sm text-gray-800">★ {listing.rating.toFixed(2)}</span>
          </div>
          <p className="mt-1 text-sm text-gray-500">{listing.location}</p>
          <p className="mt-2 text-sm text-gray-900">
            <span className="font-semibold">${listing.pricePerNight}</span> night
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ListingCard;
