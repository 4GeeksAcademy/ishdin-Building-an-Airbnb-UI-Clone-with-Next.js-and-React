interface AmenitiesGridProps {
  amenities: string[];
}

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="py-6" aria-labelledby="amenities-heading">
      <h2 id="amenities-heading" className="text-xl font-bold text-gray-900">What this place offers</h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3 text-sm text-gray-700">
            <span aria-hidden="true" className="text-lg">✓</span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesGrid;
