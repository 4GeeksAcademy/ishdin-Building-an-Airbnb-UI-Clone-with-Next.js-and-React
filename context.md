# Context

## Project Overview

This project recreates three core Airbnb-style views using Next.js, React, TypeScript, HTML, and Tailwind CSS:

1. Home Page
2. Catalog / Search Results Page
3. Room Detail Page

The goal is to let users discover stays, browse available listings, and view detailed information about a selected room.

---

## 1. Home Page

### Description

The Home Page is the main discovery page. It allows users to search listings, browse categories, and view available properties in a responsive card grid.

### Main Components

- **TopNavigation**
  - Airbnb-style logo
  - Search input
  - User/menu icons

- **SearchBar**
  - Tracks user input
  - Filters visible listings while the user types

- **CategoryFilter**
  - Horizontal category row
  - Example categories: Beach, Mansions, Trending, Cabins, City
  - Highlights the selected category

- **ListingGrid**
  - Responsive layout for property cards
  - Single column on mobile
  - Multiple columns on larger screens

- **ListingCard**
  - Property image
  - Listing title
  - Location/category
  - Price per night
  - Star rating
  - Navigates to the Room Detail Page when selected

- **LoadingIndicator**
  - Displayed while listing data is being loaded

---

## 2. Catalog / Search Results Page

### Description

The Catalog Page displays search results in a sortable list. Users can compare available properties, change the price sort order, and select a listing to view its room details.

### Main Components

- **ResultsHeader**
  - Displays the number of available results
  - Contains the price sort control

- **SortControl**
  - Supports:
    - Price: Ascending
    - Price: Descending
  - Reorders the displayed listings

- **ListingCard**
  - Reuses the same listing card component from the Home Page
  - Shows property image, title, price, and rating
  - Navigates to the Room Detail Page

- **MapPlaceholder**
  - Displays a map area beside the listings on desktop
  - Appears below the listings on mobile
  - Uses a styled gray placeholder labeled **Map**

### Layout

- Desktop:
  - Listing results on the left
  - Map area on the right

- Mobile:
  - Listing results first
  - Map area below the listings

---

## 3. Room Detail Page

### Description

The Room Detail Page shows detailed information about one selected property. The room is identified using the `id` from the URL.

### Main Components

- **RoomTopBar**
  - Back link to the Catalog Page
  - Optional share/favorite actions

- **PhotoGallery**
  - Displays room photos
  - Previous and Next controls
  - Tracks the currently displayed image

- **ListingHeader**
  - Listing title
  - Star rating
  - Number of reviews
  - Location

- **HostInfoRow**
  - Host avatar
  - Host name
  - Number of years hosting

- **AmenitiesGrid**
  - Displays available amenities
  - Each amenity includes an icon and label

- **BookingCard**
  - Price per night
  - Guest counter
  - Booking / reservation call-to-action button

- **GuestCounter**
  - Increase guest count
  - Decrease guest count
  - Enforces minimum and maximum guest limits

- **LoadingIndicator**
  - Displayed while the selected room data is being loaded

---

## User and Goal

The main user is a traveler looking for a place to stay. The user wants to quickly discover available properties, search and filter listings, compare prices and ratings, and open a selected property to review its photos, location, host information, amenities, and booking details before deciding whether to continue with a reservation.
