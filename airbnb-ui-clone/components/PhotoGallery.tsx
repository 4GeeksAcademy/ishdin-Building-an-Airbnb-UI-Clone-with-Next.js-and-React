"use client";

import { useState } from "react";

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const previous = () => setPhotoIndex((current) => (current === 0 ? photos.length - 1 : current - 1));
  const next = () => setPhotoIndex((current) => (current === photos.length - 1 ? 0 : current + 1));

  return (
    <section aria-label="Room photo gallery" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="flex aspect-[16/9] items-center justify-center px-12 text-center text-lg font-semibold text-gray-500">
        {photos[photoIndex]}
      </div>
      <button onClick={previous} type="button" aria-label="Previous photo" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow">
        ←
      </button>
      <button onClick={next} type="button" aria-label="Next photo" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow">
        →
      </button>
      <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
        {photoIndex + 1} / {photos.length}
      </span>
    </section>
  );
};

export default PhotoGallery;
