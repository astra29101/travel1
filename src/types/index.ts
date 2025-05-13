
export interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  location?: string;
  createdAt: Date;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  category: 'beach' | 'mountain' | 'historical' | 'adventure' | 'cultural';
}

export interface Place {
  id: string;
  destinationId: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Package {
  id: string;
  destinationId: string;
  title: string;
  description: string;
  placesCovered: string[];
  durationDays: number;
  cost: number;
  imageUrl: string;
}

export interface Guide {
  id: string;
  name: string;
  contact: string;
  experience: number;
  languages: string[];
  rating: number;
  destinationId: string;
  pricePerDay: number;
  imageUrl: string;
}

export interface Booking {
  id: string;
  userId: string;
  packageId: string;
  guideId: string;
  travelDates: Date[];
  bookingStatus: 'confirmed' | 'pending' | 'cancelled';
  totalCost: number;
}
