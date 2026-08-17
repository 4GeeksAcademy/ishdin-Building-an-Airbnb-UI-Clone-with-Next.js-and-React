"use client";

import { useState } from "react";
import GuestCounter from "./GuestCounter";

interface BookingCardProps {
  pricePerNight: number;
}

const BookingCard = ({ pricePerNight }: BookingCardProps) => {
  const [guestCount, setGuestCount] = useState(1);
  const minGuests = 1;
  const maxGuests = 8;

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg lg:sticky lg:top-6">
      <p className="text-gray-900"><span className="text-xl font-bold">${pricePerNight}</span> night</p>
      <div className="mt-5">
        <GuestCounter
          count={guestCount}
          min={minGuests}
          max={maxGuests}
          onDecrease={() => setGuestCount((count) => Math.max(minGuests, count - 1))}
          onIncrease={() => setGuestCount((count) => Math.min(maxGuests, count + 1))}
        />
      </div>
      <button type="button" className="mt-5 w-full rounded-xl bg-rose-600 px-4 py-3 font-semibold text-white hover:bg-rose-700">
        Reserve
      </button>
      <p className="mt-3 text-center text-xs text-gray-500">You won&apos;t be charged yet.</p>
    </aside>
  );
};

export default BookingCard;
