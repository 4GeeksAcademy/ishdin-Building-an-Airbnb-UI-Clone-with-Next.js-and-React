"use client";

import { Category } from "../types/listing";

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { label: Category; icon: string }[] = [
  { label: "All", icon: "⌂" },
  { label: "Beach", icon: "☀" },
  { label: "Mansions", icon: "♛" },
  { label: "Trending", icon: "↗" },
  { label: "Cabins", icon: "⌂" },
  { label: "City", icon: "▦" },
];

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <nav aria-label="Listing categories" className="overflow-x-auto border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl gap-7 px-4 py-4 md:px-8">
        {categories.map(({ label, icon }) => {
          const selected = activeCategory === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => onCategoryChange(label)}
              className={`shrink-0 border-b-2 px-1 pb-2 text-sm transition ${selected ? "border-gray-900 font-semibold text-gray-900" : "border-transparent text-gray-500 hover:text-gray-900"}`}
            >
              <span className="mb-1 block text-xl" aria-hidden="true">{icon}</span>
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryFilter;
