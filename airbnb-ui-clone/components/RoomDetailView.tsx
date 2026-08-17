"use client";

import { useEffect, useState } from "react";
import { HOME_LISTINGS } from "../data/listings";
import { Listing } from "../types/listing";
import AmenitiesGrid from "./AmenitiesGrid";
import BookingCard from "./BookingCard";
import HostInfoRow from "./HostInfoRow";
import ListingHeader from "./ListingHeader";
import LoadingIndicator from "./LoadingIndicator";
import PhotoGallery from "./PhotoGallery";
import RoomTopBar from "./RoomTopBar";

type RoomDetailViewProps = {
  roomId: string;
};

const RoomDetailView = ({ roomId }: RoomDetailViewProps) => {
  const [room, setRoom] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRoom(HOME_LISTINGS.find((listing) => listing.id === roomId) ?? null);
      setLoading(false);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [roomId]);

  if (loading) return <LoadingIndicator />;
  if (!room) return <main className="p-8 text-center">Room not found.</main>;

  return (
    <>
      <RoomTopBar />
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <PhotoGallery photos={room.photos} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <ListingHeader title={room.title} rating={room.rating} reviewCount={room.reviewCount} location={room.location} />
            <HostInfoRow name={room.host.name} yearsHosting={room.host.yearsHosting} />
            <AmenitiesGrid amenities={room.amenities} />
          </div>
          <BookingCard pricePerNight={room.pricePerNight} />
        </div>
      </main>
    </>
  );
};

export default RoomDetailView;
