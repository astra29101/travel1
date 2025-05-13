
import { Destination, Package, Guide, Place } from "../types";

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Goa",
    description: "Pristine beaches, vibrant nightlife, and Portuguese heritage.",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000",
    highlights: ["Calangute Beach", "Fort Aguada", "Old Goa Churches"],
    category: "beach"
  },
  {
    id: "2",
    name: "Manali",
    description: "Breathtaking mountain views, lush valleys, and adventure sports.",
    imageUrl: "https://images.unsplash.com/photo-1626621342323-bcfb12403892?q=80&w=1000",
    highlights: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
    category: "mountain"
  },
  {
    id: "3",
    name: "Rajasthan",
    description: "Royal palaces, magnificent forts, and rich cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000",
    highlights: ["Amber Fort", "City Palace", "Hawa Mahal"],
    category: "historical"
  },
  {
    id: "4",
    name: "Kerala",
    description: "Serene backwaters, lush greenery, and Ayurvedic retreats.",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000",
    highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Kovalam Beach"],
    category: "cultural"
  },
  {
    id: "5",
    name: "Ladakh",
    description: "Majestic mountains, Buddhist monasteries, and high-altitude lakes.",
    imageUrl: "https://images.unsplash.com/photo-1589825744846-87523cb5d6fa?q=80&w=1000",
    highlights: ["Pangong Lake", "Nubra Valley", "Leh Palace"],
    category: "adventure"
  },
  {
    id: "6",
    name: "Andaman Islands",
    description: "Pristine beaches, coral reefs, and water adventures.",
    imageUrl: "https://images.unsplash.com/photo-1589308788413-3d300d5746aa?q=80&w=1000",
    highlights: ["Radhanagar Beach", "Cellular Jail", "Snorkeling at Coral Reefs"],
    category: "beach"
  }
];

export const packages: Package[] = [
  {
    id: "1",
    destinationId: "1",
    title: "Goa Beach Paradise",
    description: "Explore the beautiful beaches and vibrant nightlife of Goa in this 4-day package.",
    placesCovered: ["Calangute Beach", "Baga Beach", "Fort Aguada", "Anjuna Flea Market"],
    durationDays: 4,
    cost: 15000,
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000"
  },
  {
    id: "2",
    destinationId: "1",
    title: "Goa Heritage Tour",
    description: "Discover Goa's Portuguese heritage and cultural sites in this 5-day tour.",
    placesCovered: ["Old Goa Churches", "Fontainhas", "Dudhsagar Falls", "Spice Plantations"],
    durationDays: 5,
    cost: 18500,
    imageUrl: "https://images.unsplash.com/photo-1518550824607-e4f2a48b8696?q=80&w=1000"
  },
  {
    id: "3",
    destinationId: "2",
    title: "Manali Adventure Pack",
    description: "Experience thrilling adventure sports amidst snow-capped mountains.",
    placesCovered: ["Solang Valley", "Rohtang Pass", "Beas River", "Adventure Sports"],
    durationDays: 6,
    cost: 22000,
    imageUrl: "https://images.unsplash.com/photo-1626621342323-bcfb12403892?q=80&w=1000"
  },
  {
    id: "4",
    destinationId: "2",
    title: "Manali Tranquil Retreat",
    description: "Relax and rejuvenate in the peaceful valleys and hot springs of Manali.",
    placesCovered: ["Hidimba Temple", "Old Manali", "Vashisht Hot Springs", "Naggar Castle"],
    durationDays: 5,
    cost: 19000,
    imageUrl: "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=1000"
  },
  {
    id: "5",
    destinationId: "3",
    title: "Royal Rajasthan Circuit",
    description: "Experience the royal heritage and culture of Rajasthan in this complete tour.",
    placesCovered: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar"],
    durationDays: 10,
    cost: 45000,
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000"
  },
  {
    id: "6",
    destinationId: "3",
    title: "Desert Safari Special",
    description: "Experience the Thar Desert with camel safaris and folk performances.",
    placesCovered: ["Jaisalmer", "Sam Sand Dunes", "Desert Camping", "Folk Dance Show"],
    durationDays: 4,
    cost: 16500,
    imageUrl: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=1000"
  }
];

export const places: Place[] = [
  {
    id: "1",
    destinationId: "1",
    name: "Calangute Beach",
    description: "Known as the 'Queen of Beaches', Calangute is the largest beach in North Goa and one of the most popular.",
    imageUrl: "https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?q=80&w=1000"
  },
  {
    id: "2",
    destinationId: "1",
    name: "Fort Aguada",
    description: "A well-preserved 17th-century Portuguese fort offering spectacular views of the Arabian Sea.",
    imageUrl: "https://images.unsplash.com/photo-1589308583905-7c580dc82f6d?q=80&w=1000"
  },
  {
    id: "3",
    destinationId: "2",
    name: "Solang Valley",
    description: "A paradise for adventure sports enthusiasts with options for skiing, paragliding, and zorbing.",
    imageUrl: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&w=1000"
  },
  {
    id: "4",
    destinationId: "2",
    name: "Rohtang Pass",
    description: "A high mountain pass offering breathtaking views of glaciers, peaks, and valleys.",
    imageUrl: "https://images.unsplash.com/photo-1598429467496-4dc5595c335b?q=80&w=1000"
  },
  {
    id: "5",
    destinationId: "3",
    name: "Amber Fort",
    description: "A majestic fort complex with stunning architecture and artistic elements in pink and yellow sandstone.",
    imageUrl: "https://images.unsplash.com/photo-1524309784716-6a4be59e6222?q=80&w=1000"
  },
  {
    id: "6",
    destinationId: "3",
    name: "Hawa Mahal",
    description: "The iconic 'Palace of Winds' featuring a unique honeycomb façade with 953 small windows.",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000"
  }
];

export const guides: Guide[] = [
  {
    id: "1",
    name: "Raj Sharma",
    contact: "raj.sharma@example.com",
    experience: 7,
    languages: ["English", "Hindi", "Portuguese"],
    rating: 4.8,
    destinationId: "1",
    pricePerDay: 1200,
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "2",
    name: "Priya Nair",
    contact: "priya.nair@example.com",
    experience: 5,
    languages: ["English", "Hindi", "Malayalam"],
    rating: 4.7,
    destinationId: "1",
    pricePerDay: 1100,
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "3",
    name: "Tenzing Sherpa",
    contact: "tenzing@example.com",
    experience: 12,
    languages: ["English", "Hindi", "Nepali", "Tibetan"],
    rating: 4.9,
    destinationId: "2",
    pricePerDay: 1500,
    imageUrl: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: "4",
    name: "Sunita Thakur",
    contact: "sunita@example.com",
    experience: 6,
    languages: ["English", "Hindi", "Pahari"],
    rating: 4.6,
    destinationId: "2",
    pricePerDay: 1300,
    imageUrl: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: "5",
    name: "Devraj Singh",
    contact: "devraj@example.com",
    experience: 15,
    languages: ["English", "Hindi", "Rajasthani", "French"],
    rating: 4.9,
    destinationId: "3",
    pricePerDay: 2000,
    imageUrl: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: "6",
    name: "Leela Mehra",
    contact: "leela@example.com",
    experience: 9,
    languages: ["English", "Hindi", "German", "Spanish"],
    rating: 4.8,
    destinationId: "3",
    pricePerDay: 1800,
    imageUrl: "https://randomuser.me/api/portraits/women/29.jpg"
  }
];

// Featured destinations for homepage
export const featuredDestinations = destinations.slice(0, 4);

// Top packages for homepage
export const topPackages = packages.slice(0, 3);
