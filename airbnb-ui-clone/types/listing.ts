export type Category =
  | "All"
  | "Beach"
  | "Mansions"
  | "Trending"
  | "Cabins"
  | "City";

export interface HostInfo {
  name: string;
  yearsHosting: number;
}

export interface Listing {
  id: string;
  title: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  location: string;
  category: Exclude<Category, "All">;
  host: HostInfo;
  amenities: string[];
  photos: string[];
}
