export const TYPES = ["All Types", "House", "Apartment", "Penthouse"];

export const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under PKR 40M", min: 0, max: 40_000_000 },
  { label: "PKR 40M – 70M", min: 40_000_000, max: 70_000_000 },
  { label: "PKR 70M – 100M", min: 70_000_000, max: 100_000_000 },
  { label: "Over PKR 100M", min: 100_000_000, max: Infinity },
];

export const COUNTS = ["Any", "1+", "2+", "3+", "4+", "5+"];

export const SORTS = [
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export const properties = [
  { id: "1", title: "Modern Villa in DHA", type: "House", location: "DHA Phase 6, Lahore", beds: 4, baths: 4, sqft: 3200, price: 85000000, image: "/properties/villa.jpg", tag: "Featured", listedAt: "2026-09-10" },
  { id: "2", title: "Luxury Apartment", type: "Apartment", location: "Bahria Town, Islamabad", beds: 3, baths: 3, sqft: 2100, price: 52000000, image: "/properties/apartment.jpg", tag: "New", listedAt: "2026-09-21" },
  { id: "3", title: "Elegant Townhouse", type: "House", location: "Gulberg Greens, Islamabad", beds: 5, baths: 4, sqft: 2800, price: 62000000, image: "/properties/townhouse.jpg", listedAt: "2026-09-05" },
  { id: "4", title: "City View Apartment", type: "Apartment", location: "Emaar Crescent Bay, Karachi", beds: 2, baths: 2, sqft: 1500, price: 38000000, image: "/properties/cityview.jpg", tag: "Featured", listedAt: "2026-09-08" },
  { id: "5", title: "Luxury Villa", type: "House", location: "Bahria Enclave, Islamabad", beds: 6, baths: 6, sqft: 4500, price: 120000000, image: "/properties/luxury-villa.jpg", tag: "New", listedAt: "2026-09-22" },
  { id: "6", title: "Premium Apartment", type: "Apartment", location: "Clifton, Karachi", beds: 3, baths: 3, sqft: 1800, price: 45000000, image: "/properties/premium-apartment.jpg", listedAt: "2026-09-02" },
  { id: "7", title: "Designer House", type: "House", location: "DHA Phase 5, Lahore", beds: 4, baths: 5, sqft: 3500, price: 95000000, image: "/properties/designer-house.jpg", listedAt: "2026-08-28" },
  { id: "8", title: "Penthouse with Terrace", type: "Penthouse", location: "Emaar Oceanfront, Karachi", beds: 4, baths: 4, sqft: 3000, price: 75000000, image: "/properties/penthouse.jpg", listedAt: "2026-09-15" },
  { id: "9", title: "Penthouse with Terrace", type: "Penthouse", location: "Emaar Oceanfront, Karachi", beds: 4, baths: 4, sqft: 3000, price: 75000000, image: "/properties/penthouse.jpg", listedAt: "2026-09-15" },
  { id: "10", title: "Penthouse with Terrace", type: "Penthouse", location: "Emaar Oceanfront, Karachi", beds: 4, baths: 4, sqft: 3000, price: 75000000, image: "/properties/penthouse.jpg", listedAt: "2026-09-15" },
];
