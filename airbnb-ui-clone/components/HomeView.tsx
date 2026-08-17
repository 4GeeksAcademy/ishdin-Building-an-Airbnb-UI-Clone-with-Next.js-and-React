"use client";

import { useEffect, useState } from "react";
import { HOME_LISTINGS } from "../data/listings";
import { Category, Listing } from "../types/listing";
import CategoryFilter from "./CategoryFilter";
import ListingGrid from "./ListingGrid";
import LoadingIndicator from "./LoadingIndicator";
import TopNavigation from "./TopNavigation";

const HomeView = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(HOME_LISTINGS);
      setVisibleListings(HOME_LISTINGS);
      setLoading(false);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const matchesFilters = (listing: Listing, term: string, category: Category) => {
    const matchesSearch = listing.title.toLowerCase().includes(term.toLowerCase());
    const matchesCategory = category === "All" || listing.category === category;
    return matchesSearch && matchesCategory;
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleListings(listings.filter((listing) => matchesFilters(listing, value, activeCategory)));
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setVisibleListings(listings.filter((listing) => matchesFilters(listing, searchTerm, category)));
  };

  return (
    <>
      <TopNavigation searchValue={searchTerm} onSearchChange={handleSearchChange} />
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        {loading ? <LoadingIndicator /> : <ListingGrid listings={visibleListings} />}
      </main>
    </>
  );
};

export default HomeView;
